import styles from './reservation.module.scss';

const Reservation = () => {
  return (
    <section className={styles.reservation}>
      <h2>Tisch reservieren</h2>
      <p>Füllen Sie das Formular aus, um eine Reservierung anzufragen:</p>

      <form 
        action="https://formsubmit.co/luisesseeblick@gmail.com" 
        method="POST"
        className={styles.form}
      >
        <input type="text" name="name" placeholder="Ihr Name" required />
        <input type="email" name="email" placeholder="Ihre E-Mail" required />
        <input type="tel" name="telefon" placeholder="Telefonnummer" required />
        <input type="date" name="datum" required />
        <input type="time" name="zeit" required />
        <input type="number" name="personen" placeholder="Anzahl der Personen" required min="1" />
        <textarea name="nachricht" placeholder="Besondere Wünsche" rows={4}></textarea>

        {/* Optional: Weiterleitung nach Absenden */}
        <input type="hidden" name="_next" value="https://deine-domain.de/danke" />

        <button type="submit">Reservierung absenden</button>
      </form>
    </section>
  );
};

export default Reservation;
