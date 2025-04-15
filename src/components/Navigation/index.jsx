import styles from './navigation.module.css';

const Navigation = ({selectedPage}) => {
    return (
        <>
        <h1 className={styles.header_title}>Nomad Nest</h1>
        <div className={styles.nav_menu}>
            <p className={styles.nav_item} onClick={() => selectedPage("Home")}>Home</p>
            <p className={styles.nav_item} onClick={() => selectedPage("ExplorePlaces")} >Places to Explore</p>
            <p className={styles.nav_item} onClick={() => selectedPage("ImageGallery")} >Image Gallery</p>
        </div>
        </>
    )
}

export default Navigation;