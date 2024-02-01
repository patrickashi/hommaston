import React from "react"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar />
          <div className="content">
              <Routes>
                <Route index path="/" element={<Home />} />
              </Routes>
          </div>
        </div>
    </Router>
    
  );
}

export default App;
