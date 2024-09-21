// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
 

  const[mode , setmode] = useState('light');

  const[alert , setalert] = useState(null);

  const showAlert = (message,type) => {

    setalert({
      msg: message,
      type: type
    })

     setTimeout(() => {
        setalert(null);
      }, 3000);
  }

  const[thememode , setthememode] = useState({
    color:'black',
    backgroundColor:'white',
    border : '1px solid black'
  });

  const togglemode = ()=>
  {
    if (mode === 'light')
    {
      setmode('dark');
      setthememode({
        color:'white',
    backgroundColor:'black',
    border : '1px solid white'
      })
       showAlert("Dark Mode Enabled","warning");
     
    }
    else
    {
      setmode('light');
        setthememode({
        color:'black',
    backgroundColor:'white',
    border : '1px solid black'
      })

       showAlert("light Mode Enabled","success");
        
    }
  }

  return (
    <>
    <Router>
    <Navbar link="About Us" home="Home" title="Text Utils" mode = {mode} togglemode ={togglemode}/>
    <Alert alert = {alert}/>
<div className="container my-3 styledisplayflex" >
    <Routes>
        <Route path="/about" element={<Aboutus thememode={thememode} />} />
    <Route path="/" element={<Textform showAlert={showAlert} thememode={thememode} heading="Enter the text to analyze" uppercasebtn="Upper" lowercasebtn="Lower" flettercasebtn="First Letter Toggle" fwordcasebtn="Every Word First Letter" />} />
    </Routes>
   
   </div>
    </Router>
    </>
  );
}

export default App;
