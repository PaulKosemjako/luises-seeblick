import styles from './contact.module.scss';

const Contact = () => {
  return (
    <section className={styles.contact}>
      <h2>Kontakt</h2>
      <p>Du findest uns direkt am schönen Seeufer – ideal für eine kleine Auszeit!</p>

      <div className={styles.info}>
        <p><strong>Adresse:</strong> Fontaneallee 27-28, 15738 Zeuthen</p>
        <p><strong>Telefon:</strong> <a href="tel:+4917672318722">+49 176 723 187 22</a></p>
        <p><strong>E-Mail:</strong> <a href="mailto:luisesseeblick@gmail.com">luisesseeblick@gmail.com</a></p>
        <p><strong>Öffnungszeiten:</strong></p>
        <ul>
          <li>Mo–Sa: 12:00 – 18:00 Uhr</li>
          <li>Warme Küche bis 16.00 Uhr</li>
          <li>Brunch: 11:00 – 14:00 Uhr</li>
        </ul>
      </div>

      <div className={styles.map}>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2438.0764846001903!2d13.637069176180647!3d52.33275855007611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a83ff29ead8953%3A0xe23cdda308fa6b4d!2sLuises%20Seeblick%20Restaurant%20%26%20Cafe!5e0!3m2!1sde!2sde!4v1747770327284!5m2!1sde!2sde"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
