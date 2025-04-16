import styles from './navigation.module.css';

const Navigation = ({selectedPage}) => {
    return (
        <>
        <h1 className={styles.header_title}>Nomad Nest</h1>
        <div className={styles.nav_menu}>
            <p className={styles.nav_item} onClick={() => selectedPage("Home")}>Home</p>
            <p className={styles.nav_item} onClick={() => selectedPage("ExplorePlaces")} > Explore Places </p>
            <p className={styles.nav_item} onClick={() => selectedPage("Aboutus")} >About Us</p>
        </div>
        </>
    )
}

export default Navigation;