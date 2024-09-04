const express = require('express');
const app = express();
const PORT =  3000;

app.use(express.json());

const dogBreeds = [
  {
    "breed": "Labrador Retriever",
    "origin": "Canada",
    "size": "Large",
    "coat": "Short, dense",
    "color": ["Black", "Yellow", "Chocolate"],
    "temperament": ["Friendly", "Outgoing", "Gentle"]
  },
  {
    "breed": "German Shepherd",
    "origin": "Germany",
    "size": "Large",
    "coat": "Medium, dense",
    "color": ["Black and Tan", "Sable", "Solid Black"],
    "temperament": ["Confident", "Courageous", "Smart"]
  },
  {
    "breed": "Golden Retriever",
    "origin": "Scotland",
    "size": "Large",
    "coat": "Long, dense",
    "color": ["Golden"],
    "temperament": ["Friendly", "Intelligent", "Devoted"]
  },
  {
    "breed": "Bulldog",
    "origin": "England",
    "size": "Medium",
    "coat": "Short, smooth",
    "color": ["White", "Red", "Brindle"],
    "temperament": ["Docile", "Willful", "Friendly"]
  },
  {
    "breed": "Beagle",
    "origin": "England",
    "size": "Medium",
    "coat": "Short, dense",
    "color": ["Tri-color", "Lemon", "Red and White"],
    "temperament": ["Curious", "Friendly", "Merry"]
  },
  {
    "breed": "Poodle",
    "origin": "Germany/France",
    "size": "Small to Large",
    "coat": "Curly, dense",
    "color": ["White", "Black", "Apricot"],
    "temperament": ["Intelligent", "Active", "Alert"]
  }
];

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/breeds', (req, res) => {
  res.json(dogBreeds);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});