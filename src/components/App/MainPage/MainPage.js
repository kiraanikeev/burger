import BurgerConstructor from '../../BurgerConstructor/BurgerConstructor'
import BurgerIngredients from '../../BurgerIngredients/BurgerIngredients'
import styles from './MainPage.module.css'
function MainPage() {
  
  return (
    <div className={styles.main}>
        <BurgerIngredients/>
        <BurgerConstructor/>
    </div>
  )
}

export default MainPage