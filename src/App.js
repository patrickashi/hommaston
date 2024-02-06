import React from "react"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Aboutusp from "./pages/Aboutusp";
import Servicesp from "./pages/Servicesp";
import Hepburnp from "./pages/Hepburnp";
import Ourteamp from "./pages/Ourteamp";
import Contactp from "./pages/Contactp";

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar />
          <div className="content">
              <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/Aboutusp" element={<Aboutusp />} />
                <Route path="/Servicesp" element={<Servicesp />} />
                <Route path="/Hepburnp" element={<Hepburnp />} />
                <Route path="/Ourteamp" element={<Ourteamp />} />
                <Route path="/Contactp" element={<Contactp />} />
              </Routes>
          </div>
        </div>
    </Router>
    
  );
}

export default App;
