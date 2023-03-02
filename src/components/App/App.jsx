import AppHeader from '../AppHeader/AppHeader';
import styles from './App.module.css'
import MainPage from './MainPage/MainPage';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { fetchIngredients } from '../../asyncActions/ingredients';
function App() {
  const dispatch = useDispatch()

 useMemo(()=>{
  dispatch(fetchIngredients())
  },[])
      
  return (
    <div className={styles.App}>
      <AppHeader/>
      <MainPage/>
    </div>
  );
}

export default App;
