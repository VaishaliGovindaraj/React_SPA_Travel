import MainContent from "../MainContentArea";

const Home = ({chosenCountry}) => {
    return(
        <MainContent selectedCountry={chosenCountry}/>
    )
}

export default Home;