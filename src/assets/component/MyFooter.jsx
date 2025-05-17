import React from 'react'

function Footer() {
  return (
    <div>     
        
    <footer className="bg-gradient-to-r from-blue-900 to-black text-white pt-10 pb-6">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
  <div>
    <h3 className="text-3xl font-bold mb-4">TravelNow</h3>
    <p className="text-gray-400">Discover new places and experience unforgettable journeys with us.</p>
    <div className="flex space-x-4 mt-4">
      <a href="#" className="hover:text-blue-400">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#" className="hover:text-blue-400">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="#" className="hover:text-blue-400">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#" className="hover:text-blue-400">
        <i className="fab fa-youtube"></i>
      </a>
    </div>
  </div>
  <div>
    <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
    <ul className="space-y-2">
      <li><a href="#" className="hover:underline hover:text-blue-400">Home</a></li>
      <li><a href="#" className="hover:underline hover:text-blue-400">Destinations</a></li>
      <li><a href="#" className="hover:underline hover:text-blue-400">Offers</a></li>
      <li><a href="#" className="hover:underline hover:text-blue-400">Contact Us</a></li>
    </ul>
  </div>
  <div>
    <h4 className="text-xl font-semibold mb-4">Support</h4>
    <ul className="space-y-2">
      <li><a href="#" className="hover:underline hover:text-blue-400">FAQs</a></li>
      <li><a href="#" className="hover:underline hover:text-blue-400">Privacy Policy</a></li>
      <li><a href="#" className="hover:underline hover:text-blue-400">Terms & Conditions</a></li>
      <li><a href="#" className="hover:underline hover:text-blue-400">Help Center</a></li>
    </ul>
  </div>
  <div>
    <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
    <p className="text-gray-400 mb-4">Subscribe to get special offers and updates.</p>
    <form className="flex flex-col space-y-3">
      <input
        type="email"
        placeholder="Your email"
        className="p-2 rounded-md text-black"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 rounded-md py-2 px-4"
      >
        Subscribe
      </button>
    </form>
  </div>

</div>

<div className="text-center text-gray-500 text-sm mt-10">
  © 2025 TravelNow. All rights reserved.
</div>
</footer></div>
  )
}

export default Footer