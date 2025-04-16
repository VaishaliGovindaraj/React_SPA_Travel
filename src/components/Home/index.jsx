import styles from './home.module.css'
import MainContent from '../MainContentArea/index.jsx'



const Home = ({selectedPage}) => {
    return (
        <div className={styles.home_wrapper}>
            <MainContent assignPage={selectedPage} />
            
        </div>
    )

}

export default Home;
