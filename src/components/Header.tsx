import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../assets/logo-transparent.png'; 

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <img src={logo} alt="Luises Seeblick Logo" className={styles.logo} />
        </Link>
        <nav>
          <ul className={styles.navList}>
            <li><Link to="/">Startseite</Link></li>
            {/*<li><Link to="/speisekarte">Speisekarte</Link></li>*/}
            <li><Link to="/reservierung">Reservierung</Link></li>
            <li><Link to="/galerie">Galerie</Link></li>
            <li><Link to="/kontakt">Kontakt</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
