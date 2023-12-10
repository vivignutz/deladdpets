// src/PetCard.js
import React, { useState } from 'react';

function PetCard({ pet, setPets }) {
  const [editing, setEditing] = useState(false);
  const [editedPet, setEditedPet] = useState({ ...pet });

  const handleDelete = () => {
    setPets((prevPets) => prevPets.filter((p) => p.id !== pet.id));
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setPets((prevPets) =>
      prevPets.map((p) => (p.id === pet.id ? editedPet : p))
    );
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPet((prevPet) => ({ ...prevPet, [name]: value }));
  };

  return (
    <div>
      <h2>{editing ? 'Edit Pet' : pet.name}</h2>
      {editing ? (
        <>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={editedPet.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Breed:
            <input
              type="text"
              name="breed"
              value={editedPet.breed}
              onChange={handleChange}
            />
          </label>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <p>Breed: {pet.breed}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
}

export default PetCard;
