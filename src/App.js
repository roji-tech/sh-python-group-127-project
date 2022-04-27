import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Component import
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar1';

// CSS import
import './App.css';
import Products from './components/Products';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} >
          
        </Route>
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter >
  );
}

export default App;
