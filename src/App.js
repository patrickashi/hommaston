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
import Classroomblueformp from "./pages/Classroomblueformp";
import Classroomredformp from "./pages/Classroomredformp";
import RegistrationForm from "./components/RegistrationForm";
import Receiptuploadp from "./pages/Receiptuploadp";
import PopUp from "./components/PopUp";
import Registrationformp from "./pages/Registrationformp";

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar />
          <PopUp imageUrl="https://example.com/advert.jpg" registrationUrl="/registrationformp" />
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
                <Route path="/Blendedtrainingp" element={<Blendedtrainingp />} />
                <Route path="/Classroomblueformp" element={<Classroomblueformp />} />
                <Route path="/Classroomredformp" element={<Classroomredformp />} />
                <Route path="/Aboutusp" element={<RegistrationForm />} />
                <Route path="/Receiptuploadp" element={<Receiptuploadp /> } />
                <Route path="/Registrationformp" element={<Registrationformp />} />
              </Routes>
          </div>
        </div>
    </Router>
    
  );
}

export default App;
