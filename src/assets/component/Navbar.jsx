
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/authcontext';

function Navbar() {
  const { isLoggedIn, setUser, setsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser({});
    setsLoggedIn(false);
    localStorage.setItem("isLoggedIn", JSON.stringify(false));

    toast.success("Logged out successfully!");
    navigate("/"); 
  };


  // function handleLogout(){
  //   if(isLoggedIn){
  //     logout();
  //     toast.success("Logged out successfully");
  //     navigate("/login");
  //   }
  // }
  
  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-between h-16 bg-amber-50 px-8 shadow-md z-10 font-bold">
      <div className="text-red-700 text-2xl font-bold">TOUR PLAN</div>
      <nav>
        <ul className="flex items-center gap-8">
          <li><Link to="/" className="text-black font-bold hover:text-red-600 transition">Home</Link></li>
          <li className="text-black font-bold hover:text-red-600 cursor-pointer transition">About</li>
          <li className="text-black font-bold hover:text-red-600 cursor-pointer transition">Services</li>
          <li className="text-black font-bold hover:text-red-600 cursor-pointer transition">Product</li>

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
    </div>
  );
}
export default Navbar;
