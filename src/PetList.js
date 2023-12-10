// src/PetList.js
import React, { useState } from 'react';
import PetCard from './PetCard';
import './PetList.css'; 
import './Header.css'; 

function PetList({ pets, setPets }) {
  const [newPet, setNewPet] = useState({ name: '', breed: '' });
  const [showForm, setShowForm] = useState(false);

  const handleAddPet = () => {
    setPets((prevPets) => [...prevPets, { ...newPet, id: Date.now() }]);
    setNewPet({ name: '', breed: '' });
    setShowForm(false); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPet((prevPet) => ({ ...prevPet, [name]: value }));
  };

  return (
    <div>
      {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet} setPets={setPets} />
      ))}
      {showForm && (
        <div className="add-pet-form">
          <h2>Add new Pet</h2>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={newPet.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Breed:
            <input
              type="text"
              name="breed"
              value={newPet.breed}
              onChange={handleChange}
            />
          </label>
          <button onClick={handleAddPet}>Add Pet</button>
        </div>
      )}
      <button onClick={() => setShowForm(!showForm)}>Add Pet</button>
    </div>
  );
}

export default PetList;
