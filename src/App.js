import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
//import components
import Sidebar from './components/Sidebar'
import CheckPage from './components/CheckPage'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Header/>
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/product/:id' element={<ProductDetails/>} />
       <Route path='/checkout-page' element={<CheckPage/>} />
      </Routes>
      <Sidebar/>
      <Footer/>
    </Router>
  </div>;
};

export default App;
