import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// views
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';

// components
import Header from './components/custom_header';

import "./styles/styles.css";

const Roads = () => (
    <>
        <BrowserRouter>
            <Header />
            <div className="App">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/About" element={<About/>} />
                <Route path="/Projects" element={<Projects/>} />
                <Route path="/Contacts" element={<Contacts/>} />
            </Routes>
            </div>
        </BrowserRouter>
    </>
)

export default Roads;