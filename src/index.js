import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Layout from './App';
import Home from './pages/Home';
import About from './pages/About'
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () =>{
  const [mode, setMode] = useState('light')
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout mode={mode} setMode={setMode}  />}>
            <Route index element={<Home mode={mode} setMode={setMode} />} />
            <Route path="/about" element={<About mode={mode} setMode={setMode} />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

root.render(<App/>);

reportWebVitals();