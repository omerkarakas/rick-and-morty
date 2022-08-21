import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import EpisodePage from './pages/EpisodePage';
import CharacterPage from './pages/CharacterPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="episode/:id" element={<EpisodePage />} />
          <Route path="character/:id" element={<CharacterPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
