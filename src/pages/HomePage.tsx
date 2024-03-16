// Import necessary modules
import React, { useEffect, useState } from 'react';
import PokemonCard from '../components/pokemonCards'; 
import { getPokemons, getPokemonDetails, PokemonListResponse, PokemonListItem } from '../services/PokemonService';

// Define the HomePage component
const HomePage: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<PokemonListResponse | null>(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const data = await getPokemons(100);
        setPokemonList(data);
      } catch (error) {
        console.error('Error fetching Pokemons:', error);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <h1>Pokémon List</h1> <br/>
      {pokemonList?.results.map((pokemon: PokemonListItem) => (
        <div key={pokemon.name}>
          <PokemonCard
            name={pokemon.name}
            imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
            pokemonId={parseInt(pokemon.url.split('/')[6], 10)}  // Extract and pass the pokemonId
          />
        </div>
      ))}
    </div>
  );
};

// Export the HomePage component
export default HomePage;
