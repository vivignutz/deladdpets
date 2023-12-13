import React, { useState } from 'react';
import PetList from './PetList';
import Header from './Header';
import Footer from './Footer';
import './App.css'; 

function App() {
  const [pets, setPets] = useState([
    { id: 1, name: 'Racoon', breed: 'Crab-eating' },
    { id: 2, name: 'Cat', breed: 'Siamese' },
    { id: 3, name: 'Dog', breed: 'French Bulldog' },
  ]);

  return (
    <div className="App">
      <Header />
      <PetList pets={pets} setPets={setPets} />
      <Footer />
    </div>
  );
}

export default App;
