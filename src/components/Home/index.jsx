import styles from './home.module.css'
import MainContent from '../MainContentArea/index.jsx'



const Home = () => {
    return(
        <div className= {styles.home_wrapper}>
        <MainContent/>
        </div>
    )

}

export default Home;
