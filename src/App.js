import React from 'react';
import './App.css';
import Navbar from './components';
import { BrowserRouter as Router, Routes, Route, Navigate }
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Packages from './pages/packages';
import Teachers from './pages/teachers';
import Contact from './pages/contact';
import Footer from './components/footer';
import Login from './pages/Signup/Login';
import Signup from './pages/Signup/Signup';

function App() {

  const isAuthenticated = localStorage.getItem('login_token');
	return (
    <Router>
        <Navbar />
        <Routes>
          <Route exact path='/'  element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={isAuthenticated ? <Contact /> : <Navigate to='/login'/>} />
          <Route path='/packages' element={<Packages />} />
          <Route path='/teachers' element={<Teachers />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
	);
}

export default App;
