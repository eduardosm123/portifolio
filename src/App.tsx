import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/sobre" element={<About />}></Route>
      <Route path="/contato" element={<Contact />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
