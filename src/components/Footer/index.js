import styles from "./Footer.module.css";

function Footer() {

  return (
    <div className={styles.container}>
      <nav className={styles.footer}>
        <div>
          <h1 className={styles.footer__brand}>Created By Irsan</h1>
        </div>
        <div>
          <ul className={styles.footer__list}>
            <li>Global</li>
            <li>Indonesia</li>
            <li>Province</li>
            <li>About</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
