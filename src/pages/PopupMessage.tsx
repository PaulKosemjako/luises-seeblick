import { useEffect, useState } from "react";
import styles from "./popumMessage.module.scss";
import { Link } from "react-router-dom";


const PopupMessage = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        //setTimeout(() => setIsVisible(false), 1000);
    }, []);


    return (
        <>
            {isVisible && (
                <div className={styles.popup}>
                    <p><strong>Wir suchen Verstärkung für unser Team!!!</strong><br />
                    Köch:innen & Servicekräfte (Festanstellung, MiniJob)</p>

                    <div className={styles.contact}>
                        <p><strong>Telefon:</strong> <a href="tel:+4917672318722">+49 176 723 187 22</a></p>
                        <p><strong>E-Mail:</strong> <a href="mailto:luisesseeblick@gmail.com">luisesseeblick@gmail.com</a></p>
                        <Link to="/kontakt" className={styles.contactButton}>Zur Kontaktseite</Link>
                    </div>
                    <button onClick={() => setIsVisible(false)}>X</button>
                </div>
            )}

            {!isVisible && (
                <div className={styles.reopenBar} onClick={() => setIsVisible(true)}>
                    Team sucht Verstärkung!!! - Klick für Infos
                </div>
            )}
        </>
    );
};

export default PopupMessage;