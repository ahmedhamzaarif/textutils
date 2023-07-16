import React from "react";
import { useState } from 'react';
import Form from './components/Form';
import Faq from "./components/Faq";

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


  return (
    <>
      <Form showAlert={showAlert} mode={mode} setMode={setMode} heading='Enter your text here to analyze' theme={mode}/>
      <Faq heading="Why use TextUtils"/>
    </>
  );
}

export default App;
