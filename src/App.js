import './App.css';
import HomePage from './page/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonPage from './page/PokemonPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/pokemon' element={<PokemonPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
