import styles from './Footer.module.css';
import { Github, Linkedin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerText}>
          <h1>IFRN - Campus Macau</h1>
          <h1>Curso Técnico em Informática</h1>
          <h1>Programação para Internet 2025</h1>
        </div>
        <p>Prof. Guilherme Leal Santos</p>
        <div className={styles.icons}>
          <Github />
          <Linkedin />
          <Phone />
        </div>
      </div>
    </footer>
  );
}
