import styles from './navigation.module.css';

const Navigation =() => {
    return(
        <div className={styles.nav_menu}>
        <p className={styles.nav_item} >Home</p>
        <p className={styles.nav_item} >Places to Explore</p>
        <p className={styles.nav_item} >Image Gallery</p>
        <p className={styles.nav_item} >Contact</p>
        </div>
    )
}

export default Navigation;