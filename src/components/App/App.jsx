import AppHeader from '../AppHeader/AppHeader';
import styles from './App.module.css'
import MainPage from './MainPage/MainPage';
import { ingredientsApi } from '../../api/ingredientsApi';
import { useEffect, useState, useMemo } from 'react';
function App() {
  const [dataIngridients, setDataIngridients] = useState([])
 useMemo(()=>{
     ingredientsApi()
     .then(data=>{
      setDataIngridients(data?.data)
     }
      )
  },[])
  console.log('dataIngridients',dataIngridients)
  return (
    <div className={styles.App}>
      <AppHeader/>
      <MainPage dataIngridients={dataIngridients}/>
    </div>
  );
}

export default App;
