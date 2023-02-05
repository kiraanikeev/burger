import AppHeader from '../AppHeader/AppHeader';
import styles from './App.module.css'
import MainPage from './MainPage/MainPage';

function App() {
  return (
    <div className={styles.App}>
      <AppHeader/>
      <MainPage/>
    </div>
  );
}

export default App;
