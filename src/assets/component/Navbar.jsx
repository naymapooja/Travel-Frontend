
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import { useAuth } from '../../context/authcontext';

// function Navbar() {
//   const { isLoggedIn, setUser, setsLoggedIn } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     setUser({});
//     setsLoggedIn(false);
//     localStorage.setItem("isLoggedIn", JSON.stringify(false));

//     toast.success("Logged out successfully!");
//     navigate("/"); 
//   };


  
//   return (
//     <div className="fixed top-0 left-0 right-0 flex   items-center justify-between h-16 bg-amber-50 px-8 shadow-md z-10 font-bold">
//       <div className="text-red-700 text-2xl font-bold">TOUR PLAN</div>
//       <nav>
//         <ul className="flex items-center gap-8">
//           <li><Link to="/" className="text-black font-bold hover:text-red-600 transition">Home</Link></li>
//           <li><Link to="/Tourplace" className="text-black font-bold hover:text-red-600 transition">About</Link></li>
//           <li><Link to="/hotelSearch" className="text-black font-bold hover:text-red-600 transition">Services</Link></li>
//           {/* <li className="text-black font-bold hover:text-red-600 cursor-pointer transition">Product</li> */}

//           {!isLoggedIn ? (
//             <>
//               <li>
//                 <Link to="/Signup">
//                   <button className="bg-black text-amber-50 rounded-xl px-5 py-2 transition hover:bg-amber-50 hover:text-black border-2 border-black">
//                     Signup
//                   </button>
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/Login">
//                   <button className="bg-black text-amber-50 rounded-xl px-5 py-2 transition hover:bg-amber-50 hover:text-black border-2 border-black">
//                     Login
//                   </button>
//                 </Link>
//               </li>
//             </>
//           ) : (
//             <li>
//               <button
//                 onClick={handleLogout}
//                 className="bg-black text-amber-50 rounded-xl px-5 py-2 transition hover:bg-amber-50 hover:text-black border-2 border-black"
//               >
//                 Logout
//               </button>
//             </li>
//           )}
//         </ul>
//       </nav>
//     </div>
//   );
// }
// export default Navbar;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/authcontext';
import { HiMenu, HiX } from 'react-icons/hi'; // Import hamburger and close icons

function Navbar() {
  const { isLoggedIn, setUser, setsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    setUser({});
    setsLoggedIn(false);
    localStorage.setItem("isLoggedIn", JSON.stringify(false));
    toast.success("Logged out successfully!");
    navigate("/");
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-amber-50 shadow-md z-10 font-bold">
      <div className="flex items-center justify-between h-16 px-6 md:px-8">
        <div className="text-red-700 text-2xl font-bold">TOUR PLAN</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-8">
            <li><Link to="/" className="text-black font-bold hover:text-red-600 transition">Home</Link></li>
            <li><Link to="/Tourplace" className="text-black font-bold hover:text-red-600 transition">About</Link></li>
            <li><Link to="/hotelSearch" className="text-black font-bold hover:text-red-600 transition">Services</Link></li>

            {!isLoggedIn ? (
              <>
                <li>
                  <Link to="/Signup">
                    <button className="bg-black text-amber-50 rounded-xl px-5 py-2 transition hover:bg-amber-50 hover:text-black border-2 border-black">
                      Signup
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/Login">
                    <button className="bg-black text-amber-50 rounded-xl px-5 py-2 transition hover:bg-amber-50 hover:text-black border-2 border-black">
                      Login
                    </button>
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-black text-amber-50 rounded-xl px-5 py-2 transition hover:bg-amber-50 hover:text-black border-2 border-black"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-amber-50 px-6 pb-4">
          <ul className="flex flex-col gap-4">
            <li><Link to="/" onClick={toggleMenu} className="text-black hover:text-red-600 transition">Home</Link></li>
            <li><Link to="/Tourplace" onClick={toggleMenu} className="text-black hover:text-red-600 transition">About</Link></li>
            <li><Link to="/hotelSearch" onClick={toggleMenu} className="text-black hover:text-red-600 transition">Services</Link></li>

            {!isLoggedIn ? (
              <>
                <li>
                  <Link to="/Signup" onClick={toggleMenu}>
                    <button className="w-full bg-black text-amber-50 rounded-xl px-5 py-2 transition hover:bg-amber-50 hover:text-black border-2 border-black">
                      Signup
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/Login" onClick={toggleMenu}>
                    <button className="w-full bg-black text-amber-50 rounded-xl px-5 py-2 transition hover:bg-amber-50 hover:text-black border-2 border-black">
                      Login
                    </button>
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <button
                  onClick={handleLogout}
                  className="w-full bg-black text-amber-50 rounded-xl px-5 py-2 transition hover:bg-amber-50 hover:text-black border-2 border-black"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;

