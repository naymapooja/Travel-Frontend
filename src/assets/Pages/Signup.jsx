import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../axiosinstance';
import toast from 'react-hot-toast';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validateForm = () => {
    if (!fullName || !email || !password || !location) {
      toast.error('Please fill in all fields');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);
      const response = await api.post('/user', { fullName, email, password, location });

      if (response.status === 201) {
        toast.success('Signup successful! Please verify your email.');
        navigate('/otp', { state: { email } });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 mt-15">
      <div className="bg-white shadow-2xl rounded-2xl flex w-3/5 max-w-4xl overflow-hidden">
        
        {/* Left Side */}
        <div className="w-1/2 bg-blue-700 text-white flex flex-col justify-center items-center p-10">
          <h2 className="text-4xl font-bold mb-4">Join Us!</h2>
          <p className="text-lg text-center">Create your account to get started</p>
        </div>

        {/* Right Side */}
        <div className="w-1/2 p-10">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">Sign Up</h2>

          <form onSubmit={handleSubmit} autoComplete="off" className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="p-4 bg-gray-400 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-4 bg-gray-400 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-4 bg-gray-400 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="p-4 bg-gray-400 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              disabled={loading}
              className={`bg-blue-500 text-white py-3 rounded-xl font-bold hover:bg-blue-600 transition duration-300 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>

            <div className="text-center mt-4">
              <span className="text-gray-600">Already have an account?</span>
              <a
                href="/login"
                className="text-blue-500 ml-1 underline hover:text-blue-700 transition duration-300"
              >
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
