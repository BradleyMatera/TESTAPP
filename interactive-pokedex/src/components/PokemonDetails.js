import React from 'react';

const PokemonDetails = () => {
  return (
    <section id="pokemon-details" className="mb-8 hidden" aria-live="polite">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-500">Pokemon Details</h2>
      <div className="p-4 bg-white rounded shadow">
        <img id="pokemon-image" className="w-full rounded mb-4" alt="Pokemon Image" />
        <h3 className="text-xl font-semibold mb-2" id="pokemon-name"></h3>
        <p id="pokemon-description"></p>
        <div id="pokemon-tcg" className="mt-4"></div>
      </div>
      <button id="back-to-list" className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded">
        <i className="fas fa-arrow-left mr-2"></i> Back to List
      </button>
    </section>
  );
};

export default PokemonDetails;
