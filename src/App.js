// src/App.js
import React, { useState } from 'react';
import PetList from './PetList';
import Header from './Header';
import './App.css'; 

function App() {
  const [pets, setPets] = useState([
    { id: 1, name: 'Racoon', breed: 'Breed 1' },
    { id: 2, name: 'Cat', breed: 'Breed 2' },
    { id: 3, name: 'Dog', breed: 'Breed 3' },
  ]);

  return (
    <div className="App">
      <Header />
      <PetList pets={pets} setPets={setPets} />
      <Footer />
    </>
  );
}

export default App;
