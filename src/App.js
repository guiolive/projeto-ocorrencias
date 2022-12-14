import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';

import { Routes, Route } from 'react-router-dom'; // <== IMPORT
import CardConteiner from './components/CardConteiner';
import OcorrenciaDetalhe from './pages/OcorrenciaDetalhe';
import FormOcorrencia from './pages/FormOcorrencia';


function App() {
  return (
    <div className="App">
      <Navbar />
  
      
      {/*   Add <Route /> components between <Routes> and </Routes>   */} 
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<HomePage/>} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/ocorrenciaDetalhe/:id" element={<OcorrenciaDetalhe />} />

        <Route path="*" element={<ErrorPage />} /> {/* <== 404 PAGE */}

        <Route path="/novo" element={<FormOcorrencia />} />
        
      </Routes>
      
    </div>
  );
}

export default App; // PERGUNTAR DISSO AQUI
