import React, { useRef, useState } from 'react';
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
  Autocomplete,
} from '@react-google-maps/api';

const GOOGLE_API_KEY = 'AIzaSyCwa-Z_1vKzlecGHD1mk3UtoN39MpwQORM'; // Replace with your actual key
const libraries = ['places'];

const countries = {
  us: { center: { lat: 37.1, lng: -95.7 }, zoom: 3 },
  fr: { center: { lat: 46.2, lng: 2.2 }, zoom: 5 },
  de: { center: { lat: 51.2, lng: 10.4 }, zoom: 5 },
  ca: { center: { lat: 62, lng: -110.0 }, zoom: 3 },
};

const HotelSearchPage = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_API_KEY,
    libraries,
  });

  const [autocomplete, setAutocomplete] = useState(null);
  const [hotels, setHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [country, setCountry] = useState('us');

  const mapRef = useRef(null);
  const placesServiceRef = useRef(null);

  const onMapLoad = (map) => {
    mapRef.current = map;
    placesServiceRef.current = new window.google.maps.places.PlacesService(map);
  };

  const onPlaceChanged = () => {
    if (!autocomplete) return;
    const places = autocomplete.getPlace();
    if (!places.geometry || !places.geometry.location) return;

    const location = places.geometry.location;
    mapRef.current.panTo(location);
    mapRef.current.setZoom(15);

    const request = {
      location,
      radius: 5000,
      type: ['lodging'],
    };

    placesServiceRef.current.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setHotels(results);
      } else {
        setHotels([]);
        console.error('Places search failed:', status);
      }
    });
  };

  const fetchHotelDetails = (placeId) => {
    if (!placesServiceRef.current) return;
    placesServiceRef.current.getDetails({ placeId }, (places, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setSelectedHotel(places);
      }
    });
  };

  const handleCountryChange = (e) => {
    const selected = e.target.value;
    setCountry(selected);

    if (autocomplete) {
      if (selected === 'all') {
        autocomplete.setComponentRestrictions({ country: [] });
        mapRef.current.setCenter({ lat: 15, lng: 0 });
        mapRef.current.setZoom(2);
      } else {
        autocomplete.setComponentRestrictions({ country: selected });
        const countryConfig = countries[selected];
        if (countryConfig) {
          mapRef.current.setCenter(countryConfig.center);
          mapRef.current.setZoom(countryConfig.zoom);
        }
      }
    }

    setHotels([]);
    setSelectedHotel(null);
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Hotel Finder</h1>

      <div className="flex flex-col md:flex-row justify-center gap-4 mb-4">
        <Autocomplete
          onLoad={setAutocomplete}
          onPlaceChanged={onPlaceChanged}
        >
          <input
            type="text"
            placeholder="Enter a city"
            className="px-4 py-2 w-full md:w-80 border border-gray-300 rounded shadow-sm"
          />
        </Autocomplete>

        <select
          value={country}
          onChange={handleCountryChange}
          className="px-4 py-2 border border-gray-300 rounded shadow-sm"
        >
          <option value="all">All</option>
          <option value="us">USA</option>
          <option value="fr">France</option>
          <option value="de">Germany</option>
          <option value="ca">Canada</option>
        </select>
      </div>

      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '500px' }}
        zoom={countries[country]?.zoom || 3}
        center={countries[country]?.center}
        onLoad={onMapLoad}
      >
        {hotels.map((hotel, idx) => (
          <Marker
            key={idx}
            position={hotel.geometry.location}
            onClick={() => fetchHotelDetails(hotel.place_id)}
          />
        ))}

        {selectedHotel && (
          <InfoWindow
            position={selectedHotel.geometry.location}
            onCloseClick={() => setSelectedHotel(null)}
          >
            <div className="text-sm max-w-xs">
              <h2 className="font-bold text-base mb-1">{selectedHotel.name}</h2>
              <p className="mb-1">{selectedHotel.vicinity}</p>
              {selectedHotel.formatted_phone_number && (
                <p className="mb-1">📞 {selectedHotel.formatted_phone_number}</p>
              )}
              {selectedHotel.rating && (
                <p className="mb-1">⭐ {selectedHotel.rating.toFixed(1)} / 5</p>
              )}
              {selectedHotel.website && (
                <a
                  href={selectedHotel.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  Visit Website
                </a>
              )}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>

      <div className="mt-6 max-w-xl mx-auto bg-white rounded shadow p-4">
        <h2 className="font-semibold mb-2">Hotel List</h2>
        {hotels.length === 0 ? (
          <p className="text-gray-600">No hotels found. Try another city.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {hotels.map((hotel, i) => (
              <li
                key={i}
                onClick={() => {
                  mapRef.current.panTo(hotel.geometry.location);
                  mapRef.current.setZoom(16);
                  fetchHotelDetails(hotel.place_id);
                }}
                className="py-2 px-2 cursor-pointer hover:bg-gray-100"
              >
                <span className="font-medium">{hotel.name}</span>
                <div className="text-sm text-gray-500">{hotel.vicinity}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HotelSearchPage;
