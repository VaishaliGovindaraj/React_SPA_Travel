import { useEffect, useState } from "react";
import Home from "./components/Home";
import CityDetails from "./components/CityDetails";
import DisplayCategories from "./components/DisplayCategories";
import Navigation from '../src/components/Navigation'
import Footer from "./components/Footer";
import Aboutus from "./components/AboutUs";

function App() {
  const API_KEY = "64fe9596d08e483c84d60f8bd0f9b241";
  const BASE_URL = "https://api.geoapify.com/v2/places";
  const CATEGORIES = "tourism.sights,natural.beach,entertainment.museum";

  const [selectedPage, setSelectedPage] = useState("Home"); // Page Navigation State
  const [activePage, setActivePage] = useState(null); //determine the active Page
  const [placeName, setPlaceName] = useState(""); //sets the place Name from the input text
  const [placeId, setPlaceId] = useState([]); // fetches placeid using the entered text
  const [placeDetails, setPlaceDetails] = useState([]); // fetches the list of places from the chosen place id
  const [displayCategory, setDisplayCategory] = useState(false); //shows the category buttons to choose
  const [categoryChosed, setCategoryChosed] = useState(null);
  const [errorDiv, setErrorDiv] = useState(false); //Error Message to user
  const [searched, setsearched] = useState(false);
  const [notAvailable, setNotAvailable] = useState(false);
  const [loading, setLoading] = useState(false);


  const HandleInput = (e) => {
    setPlaceName(e.target.value);
    setPlaceId([]);
    setPlaceDetails([]);
    setDisplayCategory(false);
    setCategoryChosed(null);
    setErrorDiv(false);
    setsearched(false);
    setNotAvailable(false);
    setActivePage(null)
    setLoading(false)
  }

  const HandleSearch = async () => {
    try {
      const response = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${placeName}&limit=1&apiKey=${API_KEY}`);
      const result = await response.json();
      const placeIdDetials = result.features.map(item => (
        {
          placeName: item.properties.city,
          latitude: item.properties.lat,
          longtitude: item.properties.lon,
          placeIDDetail: item.properties.place_id
        }))
      setPlaceId(placeIdDetials);
      setDisplayCategory(true);
      setsearched(true);
      
    }
    catch (error) {
      console.log("Error fetching itinerary:", error);
    }
  }

  const assignPage = (item) => {
    setSelectedPage(item);
    setCategoryChosed(null);
    setPlaceId([]);
    setPlaceDetails([]);
    setDisplayCategory(false);
    setErrorDiv(false);
    setsearched(false);
    setNotAvailable(false);
    setActivePage(null)
    setLoading(false);
  }

  const handleClick = (item) => {
    setCategoryChosed(item);
    setActivePage(item);
  }

  const getItinerary = async () => {
    try {
      setLoading(true);
      const idPlace = placeId.map(item => item.placeIDDetail);
      
      const response = await fetch(
        `https://api.geoapify.com/v2/places?categories=${categoryChosed}&filter=place:${idPlace}&limit=50&apiKey=${API_KEY}`
      );

      const result = await response.json();
      if (result.features.length === 0) {
        setNotAvailable(true);
      }
      const places = result.features.map(feature => ({
        name: feature.properties.name,
        category: feature.properties.categories?.[0],
        address: feature.properties.address_line2,
        city: feature.properties.city,
        coordinates: feature.geometry.coordinates,
      }));
      setPlaceDetails(places);
      setErrorDiv(false);
    } catch (error) {
      console.log("Error fetching itinerary:", error);
    }finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searched) {
      if (placeId.length > 0 && categoryChosed !== null) {
        getItinerary();
      } else if (placeId.length === 0) {
        setErrorDiv(true);
      }
    }
  }, [placeId, categoryChosed, searched])

  return (
    <>
      <Navigation selectedPage={assignPage} />

      {selectedPage === "Home" && <Home selectedPage={assignPage}/>}

      {selectedPage === "ExplorePlaces"
        &&
        <>
          <div className="explore_places_div">
            <div className="city_input_wrapper">
              <label htmlFor="fname">City you want to travel</label>
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Enter city name"
                onChange={HandleInput}
              />
              {placeName && (
                <button onClick={HandleSearch}>Enter</button>
              )}
            </div>


            {displayCategory && <DisplayCategories chosenCategory={handleClick} currentPage={activePage}/>}
            {displayCategory && placeDetails.length === 0 && !errorDiv && !notAvailable && <div className="text_message"> Please choose a category from above listed categories</div>}
            {searched && errorDiv && (<div className="text_message">Sorry, we couldn't find the country</div>)}
            {searched && notAvailable && !errorDiv && (<div className="text_message">Sorry, we couldn't find in the required category</div>)}
            {loading && !notAvailable && !errorDiv && <div className="loading_text_message">   <div className="spinner"></div> <p>Fetching places for this category...</p></div>}
            <div className="placedetails_wrapper_div">
              {placeDetails
                .filter(item => item.name && item.name.trim() !== "")
                .map((place,index) => <CityDetails place={place} key={index} />)}
            </div>
              
            
            </div> </>}

      {selectedPage === "Aboutus" && <Aboutus />}
      <Footer selectedPage={assignPage}/>
    </>
  )
}

export default App
