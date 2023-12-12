/* import React, { useState } from 'react';
import PetCard from './PetCard';
import './PetList.css'; 
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
          <h2>Add a new pet</h2>
          <label>
            Name:
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
          <button onClick={handleAddPet}>Add</button>
        </div>
      )}
      <button onClick={() => setShowForm(!showForm)}>Add Pet</button>
    </div>
  );
}

export default PetList;
 */

// src/PetList.js
import React, { useState } from 'react';
import PetCard from './PetCard';
import './PetList.css';

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

  const renderPetCards = () => {
    const petRows = [];
    for (let i = 0; i < pets.length; i += 2) {
      const petRow = (
        <div className="pet-card-row" key={i}>
          <PetCard pet={pets[i]} setPets={setPets} />
          {i + 1 < pets.length && <PetCard pet={pets[i + 1]} setPets={setPets} />}
        </div>
      );
      petRows.push(petRow);
    }
    return petRows;
  };

  return (
    <div className="pet-list-container">
      {renderPetCards()}
      {showForm && (
        <div className="add-pet-form">
          <h2>Add a new pet</h2>
          <label>
            Name:
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
          <button onClick={handleAddPet}>Add</button>
        </div>
      )}
      <button onClick={() => setShowForm(!showForm)}>Add Pet</button>
    </div>
  );
}

export default PetList;
