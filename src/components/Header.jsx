import styles from '../css/Header.module.css';
import igniteLogo from '../assets/Ignite-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="" />
      <strong>Ignite Feed</strong>
    </header>
  );
}
