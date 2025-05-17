import React, { useState } from 'react'
 import toast from "react-hot-toast";
 import api from '../../axiosinstance';
//  import axios from 'axios';
//  import { Link } from 'react-router-dom';

function SendEmail() {
    const[email,setEmail] = useState("");
    const handleSubmit = async(e)=>{
        e.preventDefault();

        if(!email){
            toast.error('Email is required');
            return;
        }
        try {
            const response = await api.post("/userController/sendmail",{email}
            );
            toast.error(response.data.message || 'Email sent successfully');
        } catch (error) {
            toast.error(error.response?.message || 'error sending email');
        }
    }
  return (
    <div className='min-h-screen flex justify-center items-center'>
        <div className='bg-gray-600 rounded-3xl shadow-xl w-full max-w-lg p-6'>
            <h1>SendEmail</h1>
            <form action="" onSubmit={handleSubmit} className='space-y-6'>
                <div>
                    <input type="email" placeholder='Enter the user email'value={email} onChange={(e)=> setEmail(e.target.value)} />
                </div>
                {/* <Link to="/otp-Verification"><button type='submit' className='w-full py-4 bg-black text-white text-lg font-semibold rounded-xl'>submit</button></Link> */}
                 <button type='submit' className='w-full py-4 bg-black text-white text-lg font-semibold rounded-xl'>submit</button> 
            </form>
        </div>

    </div>
  )
}

export default SendEmail