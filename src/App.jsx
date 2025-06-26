import './index.css';
import styles from './Layout.module.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { LuckyNumber } from './components/LuckyNumber';

function App() {
  return (
    <div className={styles.container}>
      <LuckyNumber/>
    </div>
  );
}

export default App;
