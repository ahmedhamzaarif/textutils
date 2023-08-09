import React, { useEffect } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import logoBlue from './images/logo-blue.png'
import logoWhite from './images/logo-white.png'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import Header from './components/Header';
import Footer from './components/Footer';

function Layout({mode , setMode ,showAlert ,isFirstRender ,setisFirstRender}) {
  

  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#212529'
      document.body.style.color = '#fff'
    } else {
      setMode('light')
      document.body.style.backgroundColor = '#fff'
      document.body.style.color = '#333'
    }
  }

  useEffect(() => {
    if(!isFirstRender){
      if(mode === 'light'){
        showAlert("Light mode has been enabled.", "success")
      }else{
        showAlert("Dark mode has been enabled.", "success")
      }
    } else{
      setisFirstRender(false)
    }
  }, [mode])
  

  return (
    <React.Fragment>
      <Header logoBlue={logoBlue} logoWhite={logoWhite} title={"TexUtils"} theme={mode} toggleMode={toggleMode}/>
      <div id='headerOffset' style={{height:'50px'}}></div>
      <main id='main' className="container py-5">
        <Outlet />
      </main>
      <Footer theme={mode}/>
    </React.Fragment>
  );
}

export default Layout;