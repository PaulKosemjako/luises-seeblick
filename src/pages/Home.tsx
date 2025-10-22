import { useEffect, useState } from "react";
import styles from "./home.module.scss";
import { Link } from "react-router-dom";
import PopupMessage from "./PopupMessage";
import SilversterPopup from "./SilvesterPopup";

const images = [
  "./luises-seeblick.jpg",
  "./luises-seeblick1.jpg",
  "./luises-seeblick2.jpg",
  "./luises-seeblick3.jpg",
  "./luises-seeblick4.jpg",
  "./luises-seeblick5.jpg",
  "./luises-seeblick6.jpg",
  "./luises-seeblick7.jpg",
  "./luises-seeblick8.jpg",
  "./luises-seeblick9.jpg",
  "./luises-seeblick10.jpg"
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Alle 5 Sekunden wechseln

    return () => clearInterval(interval);
  }, []);

  return (

    <>
    <SilversterPopup />
    <PopupMessage /><>
    <section
      className={styles.home}
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>Willkommen im Luises Seeblick</h1>
          <p>Wir wünschen Ihnen eine genussreiche und erholsame Zeit in unseren zauberhaften Räumlichkeiten – mit bestem Blick auf den Zeuthener See.</p>
          <p>Genießen Sie frische, saisonale Küche in einem öffentlichen Restaurant.</p>
          <p>Auf unserer großzügigen Terrasse servieren wir kulinarische Highlights in entspannter Atmosphäre.</p>
          <p>Unsere Speisekarte wechselt wöchentlich, damit Sie immer wieder neue Gerichte aus regionalen Zutaten entdecken können.</p>
          <p>Ob Geburtstagsfeier, Taufe, Firmenevent oder Hochzeit – wir bieten den perfekten Rahmen für Ihre besonderen Anlässe.</p>
          <p>Und auch an unsere kleinen Gäste haben wir gedacht: mit einer liebevoll gestalteten Kinderecke ist für Spiel und Spaß gesorgt.</p>
          <Link to="/reservierung" className={styles.ctaButton}>
            Jetzt Tisch reservieren
          </Link>
        </div>
      </div>
    </section><section className={styles.aktion}>
        <img src="brunch.jpg" />
      </section>
      <section className={styles.aktion}>
        <img src="weihnachtsgutschein.jpg" />
      </section></></>
    

  );
};

export default Home;
