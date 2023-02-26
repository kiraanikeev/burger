import AppHeader from '../AppHeader/AppHeader';
import styles from './App.module.css'
import MainPage from './MainPage/MainPage';
import { ingredientsApi } from '../../api/ingredientsApi';
import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchIngredients } from '../../asyncActions/ingredients';
function App() {
  const dispatch = useDispatch()
  const [dataIngridients, setDataIngridients] = useState([])
  const ingredients  = useSelector((store) => store.ingredients.ingredients);

 useMemo(()=>{
  dispatch(fetchIngredients())
  },[])

  useMemo(()=>{
    console.log('ingredients' ,ingredients?.data)
    setDataIngridients(ingredients?.data)
    },[ingredients])
    
  return (
    <div className={styles.App}>
      <AppHeader/>
      <MainPage dataIngridients={dataIngridients}/>
    </div>
  );
}

export default App;
