import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonDetails, PokemonDetailsResponse } from '../services/PokemonService';

interface PokemonDetailsProps {}

const PokemonDetails: React.FC<PokemonDetailsProps> = () => {
  const { id } = useParams<{ id: string }>();
  const [details, setDetails] = useState<PokemonDetailsResponse | null>(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await getPokemonDetails(Number(id));
        setDetails(response);
      } catch (error) {
        console.error('Error fetching Pokemon details:', error);
      }
    };

    fetchPokemonDetails();
  }, [id]);

  return (
    <div>
      <h2>Pokemon Details</h2>
      {details ? (
        <>
          <p>ID: {details.id}</p>
          <p>Name: {details.name}</p>
          <p>Height: {details.height}</p>
          <p>Weight: {details.weight}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PokemonDetails;
