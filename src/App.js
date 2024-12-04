import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menubar from './components/menubar/Menubar';
import About from './pages/About';
import Home from './pages/Home';
import Team from './pages/Team';

function App() {
    return (
        <Router>
            <Menubar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/Team" element={<Team />} />
            </Routes>
        </Router>
    );
}

export default App;
