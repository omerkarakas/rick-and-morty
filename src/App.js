import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Episode from './pages/Episode';

function App() {
  //  const { loading, episodes } = useContext(AppContext);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="episode/:id" element={<Episode />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
