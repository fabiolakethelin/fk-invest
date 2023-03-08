import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from "./components/layout/NavBar";
import Container from "./components/layout/Container";
import Home from "./components/pages/Home"
import Featured from "./components/pages/Featured"
import Earn from "./components/pages/Earn"
import Contact from "./components/pages/Contact"
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Container>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/featured' element={ <Featured /> } />
          <Route path='/earn' element={ <Earn /> } />
          <Route path='/contact' element={ <Contact /> } />
        </Routes>
      </Container>
      <Footer />
  </Router>
  );
}

export default App;
