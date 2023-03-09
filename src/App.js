import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from "./components/layout/NavBar";
import Home from "./components/pages/Home"
import Featured from "./components/pages/Featured"
import Earn from "./components/pages/Earn"
import Contact from "./components/pages/Contact"
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/featured' element={ <Featured /> } />
          <Route path='/earn' element={ <Earn /> } />
          <Route path='/contact' element={ <Contact /> } />
        </Routes>
      </div>
      <Footer />
  </Router>
  );
}

export default App;
