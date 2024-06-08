import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import PokemonDetails from './components/PokemonDetails';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="container mx-auto p-4" id="main-container">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-600" id="main-title">Interactive Pokedex</h1>
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            id="search-bar"
            className="border p-2 w-full rounded"
            placeholder="Search for a Pokemon by name..."
            aria-label="Search for a Pokemon"
          />
        </div>
      </header>
      <Pokedex />
      <PokemonDetails />
      <Quiz />
    </div>
  );
}

export default App;
