// Import necessary modules
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PokemonListItem } from '../services/PokemonService';

// Define the PokemonCardProps interface
interface PokemonCardProps {
  name: string;
  imageUrl: string;
  pokemonId: number;
}

// Define the PokemonCard component
const PokemonCard: React.FC<PokemonCardProps> = ({ name, imageUrl, pokemonId }) => {
  // Render the PokemonCard component
  return (
    <div className="pokemon-card">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      {/* Use Link to navigate to PokemonDetails */}
      <Link to={`/pokemonDetails/${pokemonId}`}>
        <button>More Details</button>
      </Link>
    </div>
  );
};

// Export the PokemonCard component
export default PokemonCard;
