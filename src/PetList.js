// src/PetList.js
import React, { useState } from 'react';
import PetCard from './PetCard';
import './PetList.css'; // Importa o arquivo de estilo

function PetList({ pets, setPets }) {
  const [newPet, setNewPet] = useState({ name: '', breed: '' });
  const [showForm, setShowForm] = useState(false); // Adiciona um estado para controlar a exibição do formulário

  const handleAddPet = () => {
    setPets((prevPets) => [...prevPets, { ...newPet, id: Date.now() }]);
    setNewPet({ name: '', breed: '' });
    setShowForm(false); // Fecha o formulário após adicionar um novo pet
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPet((prevPet) => ({ ...prevPet, [name]: value }));
  };

  // Adicione showForm como dependência da função principal do componente
  return (
    <div>
      {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet} setPets={setPets} />
      ))}
      {showForm && (
        <div className="add-pet-form">
          <h2>Adicionar Novo Pet</h2>
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
            Raça:
            <input
              type="text"
              name="breed"
              value={newPet.breed}
              onChange={handleChange}
            />
          </label>
          <button onClick={handleAddPet}>Adicionar</button>
        </div>
      )}
      <button onClick={() => setShowForm(!showForm)}>Adicionar Pet</button>
    </div>
  );
}

export default PetList;
