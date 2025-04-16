import styles from './displaycategories.module.css'

const DisplayCategories = ({chosenCategory, currentPage}) => {

    return (
        <div className={styles.category_wrapper}>
            <div className={`${styles.category_item} ${currentPage === "accommodation.hotel" ? styles.active : styles.inactive}`} onClick={() => chosenCategory("accommodation.hotel")}>Hotel</div>
            <div className={`${styles.category_item} ${currentPage === "entertainment.museum" ? styles.active : styles.inactive}`}  onClick={() => chosenCategory("entertainment.museum")}>Museum</div>
            <div className={`${styles.category_item} ${currentPage === "catering" ? styles.active : styles.inactive}`}  onClick={() => chosenCategory("catering")}>Restaurants</div>
            <div className={`${styles.category_item} ${currentPage === "tourism.attraction" ? styles.active : styles.inactive}`}  onClick={() => chosenCategory("tourism.attraction")}>Attraction Points</div>
            <div className={`${styles.category_item} ${currentPage === "leisure.park" ? styles.active : styles.inactive}`}  onClick={() => chosenCategory("leisure.park")}>Parks</div>
        </div>
    )
}
export default DisplayCategories;