import styles from "./menu.module.scss";

const Menu = () => {
  return (
    <section className={styles.menu}>
      <h1>Unsere Speisekarte</h1>

      <div className={styles.section}>
        <h2>Vorspeisen</h2>
        <ul>
          <li>
            <strong>Tomatensuppe</strong> – mit frischem Basilikum (4,90 €)
          </li>
          <li>
            <strong>Räucherlachs auf Toast</strong> – mit Honig-Senf-Soße (6,50 €)
          </li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2>Hauptgerichte</h2>
        <ul>
          <li>
            <strong>Gebratener Zander</strong> – mit Bratkartoffeln und Salat (14,90 €)
          </li>
          <li>
            <strong>Spaghetti mit Pesto</strong> – vegetarisch (9,80 €)
          </li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2>Desserts</h2>
        <ul>
          <li>
            <strong>Apfelstrudel</strong> – mit Vanillesoße (4,50 €)
          </li>
          <li>
            <strong>Schokoladenmousse</strong> – mit Minze (5,20 €)
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Menu;
