import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import api from '../../axiosinstance';
import { useAuth } from '../../context/authcontext'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser, setsLoggedIn } = useAuth(); 

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      setLoading(true);
      const res = await api.post('/user/Login', { email, password });

      if (res.status === 200) {
        toast.success('Login successful!');
        localStorage.setItem('user', JSON.stringify(res.data.user));
        localStorage.setItem('token', res.data.token);
        
        setUser(res.data.user);
        setsLoggedIn(true);
        localStorage.setItem("isLoggedIn", JSON.stringify(true));

        navigate('/');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-700-400 to-gray-900">
      <div className="bg-white shadow-2xl rounded-2xl flex w-3/5 max-w-4xl overflow-hidden">
        <div className="w-1/2 bg-blue-700 text-white flex flex-col justify-center items-center p-10">
          <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-lg text-center">Please login to your account</p>
        </div>

        <div className="w-1/2 p-10">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">Login</h2>
          <form className="flex flex-col gap-5" onSubmit={handleLogin}>
            <input
              className="p-4 bg-gray-400 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="p-4 bg-gray-400 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              disabled={loading}
              className={`bg-blue-500 text-white py-3 rounded-xl font-bold hover:bg-blue-600 transition duration-300 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>

            <div className="text-center mt-2">
              <Link to="/forgot-password" className="text-blue-500 underline hover:text-blue-700 transition duration-300">
                Forgot Password?
              </Link>
            </div>

            <div className="text-center mt-4">
              <span className="text-gray-600">Don't have an account?</span>
              <Link to="/signup" className="text-blue-500 ml-1 underline hover:text-blue-700">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
