import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// import logo from './images/logo-blue.png';
import logoBlue from './images/logo-blue.png'
import logoWhite from './images/logo-white.png'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import Header from './components/Header';
import Footer from './components/Footer';
import Alert from './components/Alert';

function App({mode , setMode}) {
  
  const [toggleButton, setToggleButton] = useState('🌙')
  const [alert, setAlert] = useState(null)

  const showAlert =  (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout( ()=> {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark')
      setToggleButton('🌞')
      document.body.style.backgroundColor = '#212529'
      document.body.style.color = '#fff'
      showAlert("Dark mode has been enabled.", "success")
    } else {
      setMode('light')
      setToggleButton('🌙')
      document.body.style.backgroundColor = '#fff'
      document.body.style.color = '#333'
      showAlert("Light mode has been enabled.", "success")
    }

  }
  return (
    <>
      <Header logoBlue={logoBlue} logoWhite={logoWhite} title={"TexUtils"} theme={mode} toggleMode={toggleMode} toggleButton={toggleButton}/>
      <div id='headerOffset' style={{height:'75px'}}></div>
      <Alert alert={alert}/>
      <main id='main' className="container py-5">
        <Outlet/>
      </main>
      <Footer theme={mode}/>
    </>
  );
}

export default App;
