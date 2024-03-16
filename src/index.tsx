import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import PokemonDetails from './components/pokemonDetails';
import PokemonData from './components/pokemonData';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<PokemonData />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/aboutPokemons" element={<PokemonData />} />
          <Route path="/pokemonDetails/:id" element={<PokemonDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
