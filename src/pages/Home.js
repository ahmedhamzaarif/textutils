import React, { useEffect } from "react";
import { useState } from 'react';
import Form from '../components/Form';

function App({mode , setMode , showAlert}) {
  return (
    <>
      <Form showAlert={showAlert} theme={mode} setMode={setMode} heading='Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces'/>
    </>
  );
}

export default App;
