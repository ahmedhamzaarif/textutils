import React from "react";
import { useState } from 'react';
import Form from '../components/Form';

function App({mode , setMode}) {
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
      <Form showAlert={showAlert} theme={mode} setMode={setMode} heading='Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces'/>
    </>
  );
}

export default App;
