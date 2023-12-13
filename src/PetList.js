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

  return (
    <div className="pet-list">
      <div className="pet-card-container">
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} setPets={setPets} className="pet-card" />
        ))}
      </div>
      <div className="form-container">
        {showForm && (
          <div className="centered-form">
            <div className="add-pet-form">
              <h2>Add new Pet</h2>
              <div className="form-group">
                <label>
                  Name:
                  <input type="text" name="name" value={newPet.name} onChange={handleChange} />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Breed:
                  <input type="text" name="breed" value={newPet.breed} onChange={handleChange} />
                </label>
              </div>
              <button className="add-pet-button" onClick={handleAddPet}>
                Add
              </button>
            </div>
          </div>
        )}
        {!showForm && (
          <div className="centered-form">
            <button className='add-pet-button' onClick={() => setShowForm(!showForm)}>
              Add Pet
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PetList;

