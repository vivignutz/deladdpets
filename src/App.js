import React, { useState, useEffect } from "react";
import axios from 'axios';
import PetList from "./PetList";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

function App() {
  // Initial state of pets list
  const [pets, setPets] = useState([]);

  // Function to get pets from server
  const fetchPets = async () => {
    try {
      const response = await axios.get('http://localhost:3001/pets');
      setPets(response.data);
    } catch (error) {
      console.error('Error to get pets data:', error);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <div className="App">
      <Header />
      <PetList pets={pets} setPets={setPets} />
      <Footer />
    </div>
  );
}

export default App;
