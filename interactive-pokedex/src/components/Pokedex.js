import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    for (let i = 1; i <= 151; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(response => response.json())
        .then(data => setPokemonList(prevList => [...prevList, data]))
        .catch(error => console.error('Error fetching Pokemon data:', error));
    }
  }, []);

  useEffect(() => {
    gsap.from('.pokemon-card', { duration: 1, opacity: 0, stagger: 0.1 });
  }, [pokemonList]);

  return (
    <section id="pokedex" className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-500">Pokemon List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="pokedex-grid" role="list">
        {pokemonList.map(pokemon => (
          <div
            key={pokemon.id}
            className="pokemon-card p-4 bg-white rounded shadow cursor-pointer hover:bg-gray-100 focus:bg-gray-100 transition duration-300"
            role="listitem"
            tabIndex="0"
            aria-label={pokemon.name}
            onClick={() => console.log(pokemon.name)}  // Implement your details view logic here
          >
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-full rounded mb-2" />
            <h3 className="text-xl font-semibold mb-2 text-indigo-600">{pokemon.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pokedex;
