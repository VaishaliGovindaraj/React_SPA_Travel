import styles from './displaycategories.module.css'

const DisplayCategories = ({chosenCategory}) => {

    return (
        <div className={styles.category_wrapper}>
            <div className={styles.category_item} onClick={() => chosenCategory("accommodation.hotel")}>Hotel</div>
            <div className={styles.category_item} onClick={() => chosenCategory("entertainment.museum")}>Museum</div>
            <div className={styles.category_item} onClick={() => chosenCategory("catering")}>Restaurants</div>
            <div className={styles.category_item} onClick={() => chosenCategory("tourism.attraction")}>Attraction Points</div>
            <div className={styles.category_item} onClick={() => chosenCategory("leisure.park")}>Parks</div>
        </div>
    )
}
export default DisplayCategories;