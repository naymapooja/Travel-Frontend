import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../axiosinstance";

function OtpVerification() {
  const location = useLocation();
  const [email, setEmail] = useState(location?.state?.email || "");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

//   Optional: Redirect if email not found
  useEffect(() => {
    if (!email) {
      toast.error("Invalid request. Please login.");
      navigate("/Login");
    }
  }, [email, navigate]);

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!otp) {
      toast.error("OTP is required.");
      setLoading(false);
      return;
    }

    try {
      const response = await api.post("/user/verifyEmail", { email, otp });

      if (response.data?.success) {
        toast.success(response.data.message || "OTP Verified Successfully!");
        navigate("/Login");
      } else {
        toast.error(response.data.message || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response?.data?.message || "Error verifying OTP.");
      } else if (error.request) {
        toast.error("Network error. Please try again.");
      } else {
        toast.error("Error verifying OTP.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-700-400 to-gray-900">
      <div className="bg-white shadow-2xl rounded-2xl flex w-3/5 max-w-4xl">
        <div className="w-1/2 bg-blue-700 text-white rounded-l-2xl flex flex-col justify-center items-center p-10">
          <h2 className="text-4xl font-bold mb-4">OTP Verification</h2>
          <p className="text-lg text-center">
            Verify your email to continue. We're almost there!
          </p>
        </div>
        <div className="w-1/2 p-10">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">Enter OTP</h2>

          <p className="mb-4 text-center text-gray-600">
            OTP sent to <span className="font-semibold">{email}</span>
          </p>

          <form onSubmit={handleOtpSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="p-4 bg-gray-400 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 text-white py-3 rounded-xl font-bold hover:bg-blue-600 transition duration-300"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OtpVerification;
