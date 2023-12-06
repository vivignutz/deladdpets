/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */


import React, { useState } from 'react';
import PetList from './PetList';

function App() {
  const [pets, setPets] = useState([
    { id: 1, name: '  ', breed: 'Vira-lata' },
    { id: 2, name: 'Gato', breed: 'Persa' },
    // Adicione mais pets conforme necessário
  ]);

  return (
    <div>
      <h1>Lista de Pets</h1>
      <PetList pets={pets} setPets={setPets} />
    </div>
  );
}

export default App;
