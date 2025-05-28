import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './Layout.module.scss';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Reservation from './pages/Reservation';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

function App() {
  return (
    <Router>
      <Header />

      <main className={styles.layout}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speisekarte" element={<Menu />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/reservierung" element={<Reservation />} />
          <Route path="/galerie" element={<Gallery />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
