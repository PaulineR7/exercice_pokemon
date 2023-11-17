import './App.css';
import HomePage from './page/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonPage from './page/PokemonPage';
import PokemonDetailPage from './page/PokemonDetailPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/pokemon' element={<PokemonPage />} />
          <Route path='/pokemon/:id/details' element={<PokemonDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
