import React from 'react';
import PetList from './PetList';
import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <PetList />
      <Footer />
    </div>
  );
}

export default App;
