import React from 'react';
import './App.css';
import Navbar from './components';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Packages from './pages/packages';
import Teachers from './pages/teachers';
import Contact from './pages/contact';
import Footer from './components/footer';

function App() {
	return (
    <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/packages' element={<Packages />} />
          <Route path='/teachers' element={<Teachers />} />
        </Routes>
        <Footer />
      </Router>
	);
}

export default App;
