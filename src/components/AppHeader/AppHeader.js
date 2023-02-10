import styles from './AppHeader.module.css'
import { BurgerIcon, ListIcon, ProfileIcon, Logo} from '@ya.praktikum/react-developer-burger-ui-components'
function AppHeader() {
  return (
    <header className={styles.header}>
        <nav className={styles.nav}>
        <a className={styles.linkActive}  href="/">
            <BurgerIcon type="primary" />
            <p className={styles.text}>Конструктор</p>
        </a>   
        <a className={styles.link}  href="/">
            <ListIcon type="secondary" />
            <p className={styles.text}>Лента заказов</p>
        </a>
        <a className={styles.logo}  href="/">
            <Logo />
        </a>
        <a className={styles.link}  href="/"> 
            <ProfileIcon type="secondary" />
            <p className={styles.text}>Личный кабинет</p>
        </a>
        </nav>
    </header>
  )
}

export default AppHeader