import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Cats from './Cats';
import Dogs from './Dogs';
import Birds from './Birds';
import Fish from './Fish';
import SmallAnimals from './SmallAnimals';
import Pexperts from './Pexperts';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cats' element={<Cats />} />
        <Route path='/Dogs' element={<Dogs />} />
        <Route path='/Birds' element={<Birds />} />
        <Route path='/Fish' element={<Fish />} />
        <Route path='/SmallAnimals' element={<SmallAnimals />} />
        <Route path='/Pexperts' element={<Pexperts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;