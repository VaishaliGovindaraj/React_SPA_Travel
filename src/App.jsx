import { useEffect, useState } from "react";
import Home from "./components/Home";
import CityDetails from "./components/CityDetails";
import DisplayCategories from "./components/DisplayCategories";

function App() {
  const API_KEY = "64fe9596d08e483c84d60f8bd0f9b241";
  const BASE_URL = "https://api.geoapify.com/v2/places";
  const CATEGORIES = "tourism.sights,natural.beach,entertainment.museum";

  const [placeName, setPlaceName] = useState(""); //sets the place Name from the input text
  const [placeId, setPlaceId] = useState([]); // fetches placeid using the entered text
  const [placeDetails, setPlaceDetails] = useState([]); // fetches the list of places from the chosen place id
  const [displayCategory, setDisplayCategory] = useState(false); //shows the category buttons to choose
  const [categoryChosed,setCategoryChosed] = useState(null);



  const HandleInput = (e) => {
    setPlaceName(e.target.value);
    setPlaceId([]);
    setPlaceDetails([]);
    setDisplayCategory(false);
    setCategoryChosed(null);
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
      console.log(placeIdDetials);
    }
    catch (error) {
      console.log("Error fetching itinerary:", error);
    }
  }

  const getItinerary = async () => {
    try {
      const idPlace = placeId.map(item => item.placeIDDetail);
      {console.log(idPlace)}
      const response = await fetch(
        `https://api.geoapify.com/v2/places?categories=${categoryChosed}&filter=place:${idPlace}&limit=50&apiKey=${API_KEY}`
      );

      const result = await response.json();
      const places = result.features.map(feature => ({
        name: feature.properties.name,
        category: feature.properties.categories?.[0],
        address: feature.properties.address_line2,
        city: feature.properties.city,
        coordinates: feature.geometry.coordinates,
      }));
      setPlaceDetails(places);
      
    } catch (error) {
      console.log("Error fetching itinerary:", error);
    }
  };

  useEffect(() => {
    if(placeId.length > 0 && categoryChosed!== null)
    getItinerary();
  }, [placeId,categoryChosed])


  return (
    <>
      <Home />
      <label for="fname">City you want to travel </label>
      <input type="text" id="fname" name="fname" placeholder="enter city name" onChange={HandleInput}></input> <br></br>
      {placeName && <button onClick={HandleSearch} >Enter</button>}
      {displayCategory && <DisplayCategories chosenCategory={setCategoryChosed}/>}

      {placeDetails
        .filter(item => item.name && item.name.trim() !== "")
        .map((place) => <CityDetails place={place}/> )}
    </>
  )
}

export default App
