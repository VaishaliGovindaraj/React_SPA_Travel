import { useEffect, useState } from 'react';
import styles from './citydetails.module.css'

const CityDetails = ({ place }) => {
  const [imageUrl, setImageUrl] = useState(null);

  const setImage = async () => {
    try {
      // Build the search query using both name and category.
      const query = `${place.name}`;
      const response = await fetch(`https://api.pexels.com/v1/search?query=${place.name}&per_page=1`, {
        headers: {
          Authorization: "xu9dmagbc2xMyCaNoiQmfUHYQ2wOT3hbqWQW2Ghb4vCXa2upsuw035En"  // Replace with your actual Pexels API key.
        }
      });
      const data = await response.json();
      
      // Pexels returns an array of photos in data.photos.
      const imagePath = data.photos[0]?.src.small;
      setImageUrl(imagePath);
    } catch (error) {
      console.log("Error fetching image:", error);
    }
  }

  useEffect(() => {
    setImage();
  }, [place]);

  return (
    <div className={styles.visitplace_div}>
      <h4>{place.name}</h4>
      <img src={imageUrl} alt={place.name} />
      <p>{place.city}</p>
      <h6>{place.category}</h6>
      <p>{place.address}</p>
      <p>{place.coordinates}</p>
    </div>
  )
}

export default CityDetails;
