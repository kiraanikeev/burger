import BurgerConstructor from '../../BurgerConstructor/BurgerConstructor'
import BurgerIngredients from '../../BurgerIngredients/BurgerIngredients'
import styles from './MainPage.module.css'
import PropTypes from 'prop-types';
function MainPage({dataIngridients}) {
  
  const dataPropTypes = PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  });
  
  MainPage.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    dataIngridients: PropTypes.arrayOf(dataPropTypes).isRequired
  }
  return (
    <div className={styles.main}>
        <BurgerIngredients dataIngridients={dataIngridients}/>
        <BurgerConstructor dataIngridients={dataIngridients}/>
    </div>
  )
}

export default MainPage