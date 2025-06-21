// import React from "react";
// import { Link } from "react-router-dom";
// const Home = () => {
//   return (
//     <div>
//       <main className="bg-amber-50 w-auto h-screen flex items-center justify-center">
//         <div className="relative w-auto h-auto">
//           <img
//             alt="Background image"
//             className="rounded-b-lg bg-cover"
//             src="https://wallpaperaccess.com/full/3351434.jpg"
//           />
//           <div className="absolute inset-0 flex flex-col items-center justify-center pt-30 px-4 text-center -mt-96">
//             <h1 className="text-white text-2xl md:text-3xl font-extrabold drop-shadow-2xl leading-tight tracking-wide mb-2 -mt-36">
//               Find Your <span className="text-yellow-300">Perfect</span> <br />
//               Travel Destination & Budget
//             </h1>
//             <p className="text-black text-sm md:text-xl max-w-4xl drop-shadow-md font-medium mt-0.5">
//               Discover amazing places, compare prices, and book your dream journey with ease — whether you're flying solo, with family, or chasing adventures.
//             </p>
//           </div>
//           <div className="absolute inset-0 flex justify-center items-center mt-52 ">
//             <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-3/4 lg:w-2/3">
//               <div className="flex justify-between items-center border-b pb-3 mb-4">
//                 <div className="flex space-x-4">
//                   {["Hotels", "Homes & Apts", "Flight + Hotel", "Flights", "Activities", "Airport transfer"].map((item, index) => (
//                     <button
//                       key={index}
//                       className="text-white bg-black rounded-3xl pt-3 pb-3 pr-5 pl-6"
//                     >
//                       {item}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div className="space-y-5">
//                 <input
//                   className="w-full border rounded p-3 text-gray-700"
//                   placeholder="Enter a destination or property"
//                   type="text"
//                 />
//                 <div className="flex space-x-8 text-gray-700">
//                   <input
//                     className="w-1/2 border rounded p-3"
//                     type="date"
//                     defaultValue="2025-04-05"
//                   />
//                   <input
//                     className="w-1/2 border rounded p-3"
//                     type="date"
//                     defaultValue="2025-04-06"
//                   />
//                 </div>
//                 <div className="flex space-x-4">
//                   <select className="w-full border rounded p-3 text-gray-700">
//                     <option>1 adult</option>
//                     <option>2 adults</option>
//                     <option>Family</option>
//                   </select>
//                 </div>
//                 <a className="text-blue-600" href="#">
//                   + Add a flight
//                 </a>
//               </div>
//               <div>

//               </div>
//               <Link to={"/hotelSearch"}>
//                 <button className="text-white w-full py-3 mt-4 text-lg font-semibold bg-black rounded-2xl">
//                   SEARCH
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </main>
//       <div className="max-w-screen bg-white text-black pt-20 pl-6 overflow-hidden">
//         <span className="justify-center font-semibold text-3xl">Top destination of India</span>
//         <div className="w-full mt-32 ml-3">
//           <div className="flex gap-8 w-full overflow-x-auto">
//             {[
//               { city: "New Delhi and NCR", accommodations: "12,786", img: "https://pix6.agoda.net/geo/city/14552/1_14552_02.jpg?ca=6&ce=1&s=375x&ar=1x1" },
//               { city: "Bangalore", accommodations: "5,372", img: "https://pix6.agoda.net/geo/city/4923/1_4923_02.jpg?ca=8&ce=1&s=375x&ar=1x1" },
//               { city: "Mumbai", accommodations: "4,177", img: "https://pix6.agoda.net/geo/city/16850/1_16850_02.jpg?ca=6&ce=1&s=375x&ar=1x1" },
//               { city: "Goa", accommodations: "9,254", img: "https://pix6.agoda.net/geo/city/11304/077a5dc2a344a604731be86537916ba0.jpg?ce=0&s=375x&ar=1x1" },
//               { city: "Hyderabad", accommodations: "2,735", img: "https://pix6.agoda.net/geo/city/8801/1_8801_02.jpg?ca=6&ce=1&s=375x&ar=1x1" },
//               { city: "Varanasi", accommodations: "2,000", img: "https://pix6.agoda.net/geo/city/17269/1_17269_02.jpg?ca=6&ce=1&s=375x&ar=1x1" },
//               { city: "Chennai", accommodations: "2,832", img: "https://pix6.agoda.net/geo/city/17266/1_17266_02.jpg?ca=6&ce=1&s=375x&ar=1x1" },
//               { city: "Jaipur", accommodations: "3,082", img: "https://pix6.agoda.net/geo/city/8845/017f7c5548e391397f2be20f88df0b2c.jpg?ce=0&s=375x&ar=1x1" },
//               { city: "Pune", accommodations: "2,494", img: "https://pix6.agoda.net/geo/city/16854/0abc435fa78c2ca6fb4cb5ec86af89d0.jpg?ce=0&s=375x&ar=1x1" }
//             ].map((place, index) => (
//               <div key={index} className="text-black text-lg h-60 w-60 rounded-2xl bg-fuchsia-100 shadow-md p-2">
//                 <img className="rounded-xl w-full h-3/4 object-cover" src={place.img} alt={place.city} />
//                 <h2 className="mt-2 font-semibold">{place.city}</h2>
//                 <p>{place.accommodations} accommodations</p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="mt-32">
//           <span className="text-3xl font-semibold">Accommodation Promotions</span>
//           <div className="flex gap-8 mt-14 overflow-x-auto">
//             {[
//               "https://cdn6.agoda.net/images/WebCampaign/dealspagebanner_hp_web/en-us.png",
//               "https://cdn6.agoda.net/images/WebCampaign/20250326_ss_doubleday44/home_banner_web/en-us.png",
//               "https://cdn6.agoda.net/images/WebCampaign/20250313_KR_SeoulSpringFesta/home_banner_web02/en-us.png",
//               "https://cdn6.agoda.net/images/WebCampaign/20241122_in_summit/home_banner_web02/en-us.png",
//               "https://cdn6.agoda.net/images/WebCampaign/20241224_sg_stb/home_banner_web/en-us.png",
//               "https://cdn6.agoda.net/images/WebCampaign/20250314_emea_hilton/home_banner_web/en-us.png"
//             ].map((src, index) => (
//               <div key={index} className="h-40 w-60 rounded-2xl flex-shrink-0">
//                 <img className="w-full h-full rounded-2xl object-cover" src={src} alt="Promotion" />
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="mt-32">
//           <span className="text-3xl font-semibold pt-60">Flights & Activities Promotions</span>
//           <div className="flex mt-10 gap-8 -ml-9 rounded-2xl pb-32 overflow-x-auto">
//             {[
//               "https://cdn6.agoda.net/images/blt2/wcActivitiesPaydayCampaign-NV-20250217/Hong_Kong_Disneyland_Revised/Web/en-us.png",
//               "https://cdn6.agoda.net/images/blt2/wcActivitiesPaydayCampaign-NV-20250217/Aquaria_KLCC_Revised/Web/en-us.png",
//               "https://cdn6.agoda.net/images/blt2/wcActivtiesEG-NV-20240514/Web/en-in.png",
//               "https://cdn6.agoda.net/images/blt2/wcFlightsEvergreen2025/Web/5pct/en-us.png",
//               "https://cdn6.agoda.net/images/WebCampaign/20250319_VietnamAirGlobalCam/Homepage/Desktop/en-us.png"
//             ].map((src, index) => (
//               <div key={index} className="h-40 w-72 rounded-2xl flex-shrink-0">
//                 <img className="w-full h-full rounded-2xl object-cover" src={src} alt="Promotion" />
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="mt-32 mb-20">
//           <span className="justify-center font-bold text-3xl ml-36">Featured homes recommended for you</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <main className="bg-amber-50 min-h-screen flex items-center justify-center">
        <div className="relative w-full">
          <img
            alt="Background image"
            className="w-full h-[700px] object-cover rounded-b-lg"
            src="https://wallpaperaccess.com/full/3351434.jpg"
          />

          {/* Text on image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center -mt-80">
            <h1 className="text-white text-2xl md:text-4xl font-extrabold drop-shadow-2xl leading-tight tracking-wide mb-4">
              Find Your <span className="text-yellow-300">Perfect</span> <br />
              Travel Destination & Budget
            </h1>
            <p className="text-black text-sm md:text-lg max-w-2xl drop-shadow-md font-medium">
              Discover amazing places, compare prices, and book your dream journey with ease — whether you're flying solo, with family, or chasing adventures.
            </p>
          </div>

          {/* Search Box */}
          <div className="absolute w-full bottom-[-90px] flex justify-center px-4 mb-28 ">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-5xl">
              <div className="flex flex-wrap justify-center md:justify-between items-center gap-2 border-b pb-3 mb-4">
                {["Hotels", "Homes & Apts", "Flight + Hotel", "Flights", "Activities", "Airport transfer"].map((item, index) => (
                  <button
                    key={index}
                    className="text-white bg-black rounded-3xl px-4 py-2 text-sm hover:bg-gray-800 transition"
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="space-y-4 mt">
                <input
                  className="w-full border rounded p-3 text-gray-700"
                  placeholder="Enter a destination or property"
                  type="text"
                />
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    className="w-full md:w-1/2 border rounded p-3 text-gray-700"
                    type="date"
                    defaultValue="2025-04-05"
                  />
                  <input
                    className="w-full md:w-1/2 border rounded p-3 text-gray-700"
                    type="date"
                    defaultValue="2025-04-06"
                  />
                </div>
                <select className="w-full border rounded p-3 text-gray-700">
                  <option>1 adult</option>
                  <option>2 adults</option>
                  <option>Family</option>
                </select>
                <a className="text-blue-600 text-sm" href="#">
                  + Add a flight
                </a>
                <Link to="/hotelSearch">
                  <button className="text-white w-full py-3 mt-2 text-lg font-semibold bg-black rounded-2xl">
                    SEARCH
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Destinations */}
      <div className="w-full bg-white text-black pt-40 px-4 md:px-10 overflow-hidden">
        <h2 className="text-3xl font-semibold text-center mb-12">Top Destination of India</h2>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {[
            { city: "New Delhi and NCR", accommodations: "12,786", img: "https://pix6.agoda.net/geo/city/14552/1_14552_02.jpg?ca=6&ce=1&s=375x&ar=1x1" },
            { city: "Bangalore", accommodations: "5,372", img: "https://pix6.agoda.net/geo/city/4923/1_4923_02.jpg?ca=8&ce=1&s=375x&ar=1x1" },
            { city: "Mumbai", accommodations: "4,177", img: "https://pix6.agoda.net/geo/city/16850/1_16850_02.jpg?ca=6&ce=1&s=375x&ar=1x1" },
            { city: "Goa", accommodations: "9,254", img: "https://pix6.agoda.net/geo/city/11304/077a5dc2a344a604731be86537916ba0.jpg?ce=0&s=375x&ar=1x1" },
            { city: "Hyderabad", accommodations: "2,735", img: "https://pix6.agoda.net/geo/city/8801/1_8801_02.jpg?ca=6&ce=1&s=375x&ar=1x1" },
            { city: "Varanasi", accommodations: "2,000", img: "https://pix6.agoda.net/geo/city/17269/1_17269_02.jpg?ca=6&ce=1&s=375x&ar=1x1" },
            { city: "Chennai", accommodations: "2,832", img: "https://pix6.agoda.net/geo/city/17266/1_17266_02.jpg?ca=6&ce=1&s=375x&ar=1x1" },
            { city: "Jaipur", accommodations: "3,082", img: "https://pix6.agoda.net/geo/city/8845/017f7c5548e391397f2be20f88df0b2c.jpg?ce=0&s=375x&ar=1x1" },
            { city: "Pune", accommodations: "2,494", img: "https://pix6.agoda.net/geo/city/16854/0abc435fa78c2ca6fb4cb5ec86af89d0.jpg?ce=0&s=375x&ar=1x1" }
          ].map((place, index) => (
            <div key={index} className="min-w-[240px] bg-fuchsia-100 rounded-2xl shadow-md p-3">
              <img className="w-full h-36 object-cover rounded-xl" src={place.img} alt={place.city} />
              <h3 className="font-semibold mt-2">{place.city}</h3>
              <p className="text-sm">{place.accommodations} accommodations</p>
            </div>
          ))}
        </div>

        {/* Accommodation Promotions */}
        <h2 className="text-3xl font-semibold mt-28 mb-8">Accommodation Promotions</h2>
        <div className="flex gap-6 overflow-x-auto">
          {[
            "https://cdn6.agoda.net/images/WebCampaign/dealspagebanner_hp_web/en-us.png",
            "https://cdn6.agoda.net/images/WebCampaign/20250326_ss_doubleday44/home_banner_web/en-us.png",
            "https://cdn6.agoda.net/images/WebCampaign/20250313_KR_SeoulSpringFesta/home_banner_web02/en-us.png",
            "https://cdn6.agoda.net/images/WebCampaign/20241122_in_summit/home_banner_web02/en-us.png",
            "https://cdn6.agoda.net/images/WebCampaign/20241224_sg_stb/home_banner_web/en-us.png",
            "https://cdn6.agoda.net/images/WebCampaign/20250314_emea_hilton/home_banner_web/en-us.png"
          ].map((src, index) => (
            <div key={index} className="h-40 w-60 rounded-2xl flex-shrink-0">
              <img className="w-full h-full object-cover rounded-2xl" src={src} alt="Promotion" />
            </div>
          ))}
        </div>

        {/* Flights & Activities Promotions */}
        <h2 className="text-3xl font-semibold mt-28 mb-8">Flights & Activities Promotions</h2>
        <div className="flex gap-6 overflow-x-auto pb-20">
          {[
            "https://cdn6.agoda.net/images/blt2/wcActivitiesPaydayCampaign-NV-20250217/Hong_Kong_Disneyland_Revised/Web/en-us.png",
            "https://cdn6.agoda.net/images/blt2/wcActivitiesPaydayCampaign-NV-20250217/Aquaria_KLCC_Revised/Web/en-us.png",
            "https://cdn6.agoda.net/images/blt2/wcActivtiesEG-NV-20240514/Web/en-in.png",
            "https://cdn6.agoda.net/images/blt2/wcFlightsEvergreen2025/Web/5pct/en-us.png",
            "https://cdn6.agoda.net/images/WebCampaign/20250319_VietnamAirGlobalCam/Homepage/Desktop/en-us.png"
          ].map((src, index) => (
            <div key={index} className="h-40 w-72 rounded-2xl flex-shrink-0">
              <img className="w-full h-full object-cover rounded-2xl" src={src} alt="Flight Activity" />
            </div>
          ))}
        </div>

        {/* Featured Homes */}
        <h2 className="text-3xl font-bold text-center mb-20">Featured homes recommended for you</h2>
      </div>
    </div>
  );
};

export default Home;



