import React, { useState } from 'react';
import PetList from './PetList';
import './App.css';
import './PetList.css';
import Header from './Header';
import Footer from './Footer';


function App() {
  const [pets, setPets] = useState([
    { id: 1, name: '  ', breed: 'breed' },
    { id: 2, name: 'Cat', breed: 'no breed' },
    { id: 3, name: 'Rabbit', breed: 'white' },
  ]);

  return (
    <>
      <Header />
      <PetList pets={pets} setPets={setPets} />
      <Footer />
    </>
  );
}

export default App;
