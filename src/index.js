import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () =>{
  const [mode, setMode] = useState('light')
  const [isFirstRender, setisFirstRender] = useState(true)

  const showAlert =  (message, type)=>{
    
    toast[type](message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: mode,
      });
  }
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout mode={mode} setMode={setMode} isFirstRender={isFirstRender} setisFirstRender={setisFirstRender}  showAlert={showAlert} />}>
            <Route index element={<Home mode={mode} setMode={setMode} showAlert={showAlert} />} />
            <Route path="/about" element={<About mode={mode} setMode={setMode}  />} />
          </Route>
        </Routes>
        <ToastContainer />
    </BrowserRouter>
  )
}

root.render(<App/>);

reportWebVitals();