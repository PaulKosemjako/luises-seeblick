import { useEffect, useState } from "react";
import styles from "./silvesterPopup.module.scss";

const targetDate = new Date("2025-12-14T23:59:59").getTime();

const SilversterPopup = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [countdown, setCountdown] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                setCountdown("Frist abgelaufen!");
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 *24));
                const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((distance / (1000 * 60)) % 60);
                const seconds = Math.floor((distance / 1000) % 60);
                setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    if (!isVisible)
        return (
            <button className={styles.reopenButton} onClick={() => setIsVisible(true)}>
               🎆 Silvester
            </button>
        );


    return (
        <div className={styles.popup}>
            <div className={styles.fireworks}></div>
            <button className={styles.closeButton} onClick={() => setIsVisible(false)}>X</button>
            <h2>🎉 Silvesterparty im Luises Seeblick!</h2>
            <p>Feiern Sie mit uns ins neue Jahr!</p>
            <ul>
                <li>🎶 DJ & Musik</li>
                <li>🍾 Sekt zum Anstoßen</li>
                <li>🍴 Galabüffet mit Fingerfood</li>
                <li>🥂 Ausgewählte Getränke</li>
                <li>🍩 Berliner Pfannkuchen</li>
                <li>🗓️ Bestellfrist: <strong>bis 14. Dezember</strong></li>
                <li>💺 Es sind noch Plätze frei!</li>
                <li>💶 Preis: <strong>139,90 €</strong> pro Person</li>
            </ul>
            <p className={styles.noFirework}>Bitte beachten Sie:Aus Rücksicht auf unsere Gäste in der Seniorenresidenz findet kein Feuerwerk statt.</p>
            <div className={styles.countdown}>⌛ Countdown: {countdown}</div>
        </div>
    );
};

export default SilversterPopup;