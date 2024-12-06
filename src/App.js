import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menubar from './components/menubar/Menubar';
import About from './pages/About';
import Home from './pages/Home';
import Team from './pages/Team';
import Erp from './pages/Erp';
import Website from './pages/Website';
import Digital from './pages/Digital'

function App() {
    return (
        <Router>
            <Menubar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/Team" element={<Team />} />
                <Route path="/Erp" element={<Erp />} />
                <Route path="/Website" element={<Website />} />
                <Route path="/Digital" element={<Digital />} />
            </Routes>
        </Router>
    );
}

export default App;
