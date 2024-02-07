const express = require("express");
const fs = require("fs");
const app = express();
const port = 3001;

app.use(express.json());

// Carregar dados do arquivo JSON
const pets = JSON.parse(fs.readFileSync("pets.json"));

// To find pet by ID
const findPetIndexById = (id) =>
  pets.findIndex((pet) => pet.id === parseInt(id));

// CRUD routes:
// GET
app.get("/pets", (req, res) => {
  res.json(pets);
});

// POST
app.post("/pets", (req, res) => {
  const newPet = req.body;
  pets.push(newPet); // Add new pat to array
  // Saving new data at server
  fs.writeFileSync("pets.json", JSON.stringify(pets, null, 2));
  res.status(201).json(newPet);
});

// PUT
app.put("/pets/:id", (req, res) => {
  const id = req.params.id;
  const updatedPet = req.body;
  const petIndex = findPetIndexById(id);
  if (petIndex !== -1) {
    pets[petIndex] = updatedPet; //Actualizin pet's array
    // Saving new data to server
    fs.writeFileSync("pets.json", JSON.stringify(pets, null, 2));
    res.json(updatedPet);
  } else {
    res.status(404).json({ error: "Pet not found!" });
  }
});

// DELETE
app.delete("/pets/:id", (req, res) => {
  const id = req.params.id;
  const petIndex = findPetIndexById(id);
  if (petIndex !== -1) {
    pets.splice(petIndex, 1);
    // Saving new data to server
    fs.writeFileSync("pets.json", JSON.stringify(pets, null, 2));
    res.status(204).send();
  } else {
    res.status(404).json({ error: "Pet not found!" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
