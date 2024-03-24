import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';

import Home from './Components/Pages/Home';
import Signup from './Components/Pages/Signup'; 
import Login from './Components/Pages/Login';
import './App.css';
import Howitworks from './Components/Pages/Howitworks';


import Textandimage from './Components/Pages/Textandimage';
import Aboutus from './Components/Pages/AboutUs';
import Youtubeaudiovideo from './Components/Pages/Youtubeaudiovideo';
import WebsiteInput from './Components/Pages/Phishingwebsite';

function App() {
  return (
    <>
    {/* <Particlebackground/> */}
    <video src='./BGVIDEO.mp4' autoPlay loop muted id="background-video" />
      <Router>
        
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<Signup />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/howitworks' element={<Howitworks/>}/>
          <Route path="/aboutus"element={<Aboutus/>}/>
          <Route path="/howitworks/aboutus"element={<Aboutus/>}/>
          
          <Route path='/textinput'element={<Textandimage/>}/>
          <Route path='/login/textinput'element={<Textandimage/>}/>
          <Route path='/login/textinput/youtubeanalysis'element={<Youtubeaudiovideo/>}/>
          <Route path='/login/textinput/youtubeanalysis'element={<Textandimage/>}/>
          
          
          <Route path='/textinput/youtubeanalysis'element={<Youtubeaudiovideo/>}/>
          <Route path='/textinput/website'element={<WebsiteInput/>}/>
          <Route path='login/textinput/website'element={<WebsiteInput/>}/>
         
          {/* <Route path='/texttinput'element={<Textinput/>}/> */}

          

        </Routes>
      </Router>
    </>
  //   <div>
  //   <ParticlesBackground />
  //   {/* Your other components and content */}
  // </div>
  );
}

export default App;
