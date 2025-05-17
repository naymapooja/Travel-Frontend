

import React from "react";

const ImageScroll = () => {
  return (

    <div className='max-w-screen bg-white text-black pt-20 pl-6 overflow-hidden' >
      <span className=" justify-center font-semibold text-3xl">Top destination of India</span>
      <div className="w-full mt-32 ml-3">

        <div className="flex gap-8 w-full overflow-x-auto">
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
            <div key={index} className="text-black text-lg h-60  w-60 rounded-2xl bg-fuchsia-100 shadow-md p-2">
              <img className="rounded-xl w-full h-3/4 object-cover" src={place.img} alt={place.city} />
              <h2 className="mt-2 font-semibold">{place.city}</h2>
              <p>{place.accommodations} accommodations</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-32">
        <samp className="text-3xl font-semibold">Accommodation Promotions</samp>
        <div className="flex gap-8  mt-14">
          {[
            "https://cdn6.agoda.net/images/WebCampaign/dealspagebanner_hp_web/en-us.png",
            "https://cdn6.agoda.net/images/WebCampaign/20250326_ss_doubleday44/home_banner_web/en-us.png",
            "https://cdn6.agoda.net/images/WebCampaign/20250313_KR_SeoulSpringFesta/home_banner_web02/en-us.png",
            "https://cdn6.agoda.net/images/WebCampaign/20241122_in_summit/home_banner_web02/en-us.png",
            "https://cdn6.agoda.net/images/WebCampaign/20241224_sg_stb/home_banner_web/en-us.png",
            "https://cdn6.agoda.net/images/WebCampaign/20250314_emea_hilton/home_banner_web/en-us.png"
          ].map((src, index) => (
            <div key={index} className="h-40 w-60rounded-2xl flex-shrink-0">
              <img className="w-full h-full rounded-2xl object-cover" src={src} alt="Promotion" />
            </div>
          ))}
          
        </div>
      </div>

      <div className="mt-32" >
        <samp className="text-3xl font-semibold pt-60">Flights & Activities Promotions</samp>

        <div className=' flex mt-10 gap-8 -ml-9 rounded-2xl pb-32'>

          <div>
          </div>
          <div className="flex gap-8  mt-4">
            {[
              "https://cdn6.agoda.net/images/blt2/wcActivitiesPaydayCampaign-NV-20250217/Hong_Kong_Disneyland_Revised/Web/en-us.png",
              "https://cdn6.agoda.net/images/blt2/wcActivitiesPaydayCampaign-NV-20250217/Aquaria_KLCC_Revised/Web/en-us.png",
              "https://cdn6.agoda.net/images/blt2/wcActivtiesEG-NV-20240514/Web/en-in.png",
              "https://cdn6.agoda.net/images/blt2/wcFlightsEvergreen2025/Web/5pct/en-us.png",
              "https://cdn6.agoda.net/images/WebCampaign/20250319_VietnamAirGlobalCam/Homepage/Desktop/en-us.png"
            ].map((src, index) => (
              <div key={index} className="h-40 w-72 rounded-2xl flex-shrink-0">
                <img className="w-full h-full rounded-2xl object-cover" src={src} alt="Promotion" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div>
          <span className=" justify-center font-bold text-3xl ml-96">Featured homes recommended for you</span>
        </div>
        <div className="flex gap-8  ml-36 ">
          {[
            { city: "Red Maple Bed and Breakfast ", accommodations: "12,786", img: "https://pix8.agoda.net/hotelImages/285488/0/41a5d21fd9f20e5773803b113a01eb53.jpeg?ce=0&s=375x" },
            { city: "Bangalore", accommodations: "5,372", img: "https://pix8.agoda.net/hotelImages/62079272/-1/483aede86db520c289c907d8a3d3ab5e.jpg?ce=0&s=375x" },
            { city: "Mumbai", accommodations: "4,177", img: "https://pix8.agoda.net/hotelImages/36917957/0/5c2d243281f051693398217106e17859.jpg?ce=0&s=375x" },

          ].map((place, index) => (
            <div key={index} className="text-black text-lg h-80  w-80 rounded-2xl bg-blue-100 shadow-md p-2">
              <img className="rounded-xl w-full h-3/4 object-cover" src={place.img} alt={place.city} />
              <h2 className="mt-2 font-semibold">{place.city}</h2>
              <p>{place.accommodations} accommodations</p>
            </div>
          ))}
        </div>
      </div>
      <div className=" pt-24 pb-28 ml-11 ">
        <span className=" justify-center font-semibold text-3xl pt-32">Top destination of India</span>
        <div className="mt-32 ml-3">

          <div className="flex gap-8 overflow-y-scroll">
            {[
              { city: "New Delhi and NCR", accommodations: "12,786", img: "https://pix6.agoda.net/geo/city/2994/0c2aae36625e3e958684d0d4ae5b12d0.jpg?ce=0&s=375x&ar=1x1" },
              { city: "Bangalore", accommodations: "5,372", img: "https://pix6.agoda.net/geo/city/9395/1_9395_02.jpg?ca=6&ce=1&s=375x&ar=1x1" },
              { city: "Mumbai", accommodations: "4,177", img: "https://pix6.agoda.net/geo/city/10182/0d5aa026807856a268fc512c25ac53d3.jpg?ce=0&s=375x&ar=1x1" },
              { city: "Goa", accommodations: "9,254", img: "https://pix6.agoda.net/geo/city/17193/1_17193_02.jpg?ca=6&ce=1&s=375x&ar=1x1" },
              { city: "Hyderabad", accommodations: "2,735", img: "https://pix6.agoda.net/geo/city/8584/1_8584_02.jpg?ca=6&ce=1&s=375x&ar=1x1" },
              { city: "Varanasi", accommodations: "2,000", img: "https://pix6.agoda.net/geo/city/8105/1_8105_02.jpg?ca=6&ce=1&s=375x&ar=1x1" },
              { city: "Chennai", accommodations: "2,832", img: "https://pix6.agoda.net/geo/city/16056/1_16056_02.jpg?ca=6&ce=1&s=375x&ar=1x1" },
              { city: "Jaipur", accommodations: "3,082", img: "https://pix6.agoda.net/geo/city/14524/0435b08918aeb5e6ba2c933def5a3b57.jpg?ce=0&s=375x&ar=1x1" },
              { city: "Pune", accommodations: "2,494", img: "https://pix6.agoda.net/geo/city/8691/1_8691_02.jpg?ca=6&ce=1&s=375x&ar=1x1" }
            ].map((place, index) => (
              <div key={index} className="text-black text-lg h-60  w-60 rounded-2xl bg-purple-300 shadow-md p-2">
                <img className="rounded-xl w-full h-3/4 object-cover" src={place.img} alt={place.city} />
                <h2 className="mt-2 font-semibold">{place.city}</h2>
                <p>{place.accommodations} accommodations</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ImageScroll;




{/* <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div> */}
