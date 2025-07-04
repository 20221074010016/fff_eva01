import './index.css';
import styles from './Layout.module.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { LuckyNumber } from './components/LuckyNumber';
import { Product_list } from './components/Product_list';
function App() {
  return (
    <div className={styles.container}>
      <Product_list/>
    </div>
  );
}

export default App;
