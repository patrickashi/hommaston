import React from "react"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Aboutusp from "./pages/Aboutusp";
import Servicesp from "./pages/Servicesp";
import Hepburnp from "./pages/Hepburnp";
import Ourteamp from "./pages/Ourteamp";
import Contactp from "./pages/Contactp";
import Hommastonbluep from "./pages/Hommastonbluep";
import Hommastonredp from "./pages/Hommastonredp";
import Classroomredp from "./pages/Classroomredp";
import Classroomblue from "./pages/Classroomblue";
import Nchcdp from "./pages/Nchcdp";
import Blendedtrainingp from "./pages/Blendedtrainingp";

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
                <Route path="/Hommastonbluep" element={<Hommastonbluep />} />
                <Route path="/Hommastonredp" element={<Hommastonredp />}/>
                <Route path="/Classroomredp" element={<Classroomredp />}/>
                <Route path="/Classroomblue" element={<Classroomblue />}/>
                <Route path="/Nchcdp" element={<Nchcdp />} />
                <Route path="/Blendedtrainingp" element={<Blendedtrainingp />}></Route>
              </Routes>
          </div>
        </div>
    </Router>
    
  );
}

export default App;
