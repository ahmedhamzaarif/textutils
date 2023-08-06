import React from "react";
import { useState } from 'react';
import Form from '../components/Form';

function App({mode , setMode}) {
  return (
    <>
      <Form theme={mode} setMode={setMode} heading='Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces'/>
    </>
  );
}

export default App;
