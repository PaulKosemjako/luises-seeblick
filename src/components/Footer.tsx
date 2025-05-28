import styles from './Footer.module.scss';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} Luises Seeblick. Alle Rechte vorbehalten.</p>
      </div>
      <div className={styles.socialIcons}>
        <a href="https://www.facebook.com/share/1AmWqBfTeb/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={32} />
        </a>
        <a href="https://www.instagram.com/luises.seeblick?igsh=YzhvNmgwNnc5b2F1" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={32} />
        </a>
      </div>
      <div>
        <Link to="/impressum" className={styles.footerLink}>Impressum</Link> | <Link to="/datenschutz" className={styles.footerLink}>Datenschutz</Link>
      </div>
    </footer>
  );
};

export default Footer;
