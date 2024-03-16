import axios from 'axios';

export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface PokemonForm {
  name: string;
  url: string;
}

export interface PokemonSprites {
  front_default: string;
}

export interface Pokemon {
  id: number; 
  name: string;
  height: number; 
  weight: number; 
  abilities: PokemonAbility[];
  base_experience: number;
  forms: PokemonForm[];
  sprites: PokemonSprites;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}

export interface PokemonListItem {
  id: number;
  name: string;
  url: string;
}

export interface PokemonDetailsResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
}

export const getPokemons = async (limit: number): Promise<PokemonListResponse> => {
  try {
    const response = await axios.get<PokemonListResponse>(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokemons:', error);
    throw error;
  }
};

export const getPokemonDetails = async (id: number): Promise<PokemonDetailsResponse> => {
  try {
    const response = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return {
      id: response.data.id,
      name: response.data.name,
      height: response.data.height,
      weight: response.data.weight,
    };
  } catch (error) {
    console.error('Error fetching Pokemon details:', error);
    throw error;
  }
};
