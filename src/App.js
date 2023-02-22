import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import './App.css';
// import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Movies from './components/allmovies/Moviecon';

import Summery from './components/Summery/Summery';
import Bookingform from './components/bookingform/Bookingform';



function App() {
  const [smode, setmode] = useState("light");
  
  const toggleMode=()=>{
    if(smode==="light"){

      setmode("dark");
      document.body.style.backgroundColor ='grey';
      
      
    }
    else{
      setmode("light");
      document.body.style.backgroundColor ='white';
     
      
    }
  }
  return (
    <>
    <Navbar title="Show View" mode={smode} toggle={toggleMode} />
    <Router>
      <Routes>
      <Route exact  path='/' element={<Movies mode={smode}/>} />
      <Route exact  path='/summery/:id' element={<Summery mode={smode}/> } />
      <Route exact path='/book-ticket/Bookingform' element={<Bookingform mode={smode}/>} />
      </Routes>
      </Router>
      
     
    </>
  );
}

export default App;
