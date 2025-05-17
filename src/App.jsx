import React from 'react'
import Home from './assets/Pages/Homepage'
import { BrowserRouter as Router ,Route, Routes} from 'react-router-dom'
import Header from './assets/component/Navbar'
import Tourplace from './assets/component/Tourplace'
import Signup from './assets/Pages/Signup'
import Login from './assets/Pages/Login'
import SendEmail from './assets/Pages/SendEmail'
import OtpVerification from './assets/Pages/Otpverify'
import { Toaster } from 'react-hot-toast'
import Footer from './assets/component/MyFooter'
import HotelSearchPage from './assets/Pages/Hotel'
  const App = () => {
  
  return (
    <Router>
    <div>
    <Toaster />
     <Header/>
     <Routes>
     <Route  path='/' element={<Home/>}/> 
       <Route  path='/Tourplace' element={<Tourplace/>}/>   
       <Route  path='/signup' element={<Signup/>}/>
       <Route  path='/Login' element={<Login/>}/>
       <Route  path='/SendEmail' element={<SendEmail/>}/>
       <Route  path='/otp' element={<OtpVerification/>}/>
       <Route  path='/hotelSearch' element={<HotelSearchPage/>}/>

     </Routes>
     <Footer/>
    </div>
    </Router>
  )
  }
export default App;
