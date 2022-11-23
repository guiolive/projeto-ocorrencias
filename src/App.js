import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ErrorPage from './pages/ErrorPage';
import HomePageWithNavigate from './pages/HomePageWithNavigate';

import { Routes, Route } from 'react-router-dom'; // <== IMPORT


function App() {
  return (
    <div className="App">
      <Navbar />
      
      {/*   Add <Route /> components between <Routes> and </Routes>   */} 
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<HomePageWithNavigate />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />

        <Route path="*" element={<ErrorPage />} /> {/* <== 404 PAGE */}
      </Routes>
      
    </div>
  );
}

export default App; // PERGUNTAR DISSO AQUI
