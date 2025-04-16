import { motion } from "framer-motion";
import styles from './maincontent.module.css'
import SimpleImageSlider from "react-simple-image-slider";
import { getImageUrl } from '../../utils/functions';
import { EnvelopeOpen } from "@phosphor-icons/react";


const MainContent = ({assignPage}) => {
    const images = [
        { url: getImageUrl("nomadnest_bg1.jpg") },
        { url: getImageUrl("nomadnest_bg2.jpg") },
        { url: getImageUrl("nomadnest_bg3.jpg") },
        { url: getImageUrl("nomadnest_bg4.jpg") },
        { url: getImageUrl("nomadnest_bg5.jpg") },
        { url: getImageUrl("nomadnest_bg6.jpg") }
    ]
    return (
        <div className={styles.main_content_area}>
            <div className={styles.image_div}>
                <SimpleImageSlider width={"100%"} height={"100%"} images={images} showBullets={false} showNavs={false} slideDuration={0.25} autoPlay={true} />
                <div className={styles.text_div}>Live the Journey, Love the Nest - NomadNest</div>
            </div>
            {/* <div className={styles.country_imageTile}>
                <p className={styles.countryTile_title}>Where to Plan  Next</p>
                {[...CountryImages].slice(0, 4).map(([key, value]) => (
                    <div key={key} className={styles.image_container}>
                        <img src={getImageUrl(value)} onClick={() => selectedCountry(key)} alt="country_image" />
                        <p>{key}</p>
                    </div>
                ))}
            </div> */}
            <div className={styles.travel_intro_section}>
                <div className={styles.travel_intro_content}>
                    <h2>Why Travel Matters</h2>
                    <p>
                        Travel is more than just visiting new places — it’s about discovering new perspectives, connecting with cultures, and learning more about ourselves along the way. At NomadNest, we believe that travel is one of life’s most powerful tools for growth. It challenges our comfort zones, sparks creativity, and deepens empathy.
                    </p>
                    <p>
                        Start your adventure—click the button to explore and plan your trip with zero hassle
                    </p>
                    <button onClick={() => assignPage("ExplorePlaces")}>Explore Places</button>
                    <p>
                        Whether you're strolling through ancient cities, hiking remote mountains, or simply enjoying a local meal in a tucked-away café, every journey has something to teach. Travel brings stories to life — not just the ones we hear from others, but the ones we begin to write ourselves.
                    </p>
                    <p>
                        In a world that often feels fast-paced and disconnected, travel helps us slow down and reconnect — with nature, with people, and with purpose. It reminds us that no matter where we come from, curiosity and kindness are universal languages. At NomadNest, we’re here to support every step of that journey. Because we don’t just believe in traveling — we believe in traveling deeply, intentionally, and meaningfully.
                    </p>
                </div>
            </div>
            <div className={styles.pattern_bg_div}>
                <motion.div
                    className={styles.pattern_text_div}
                    animate={{
                        rotate: [0, 0, -45, 45, 0],
                        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.5],
                        repeat: Infinity,
                        repeatDelay: 10,
                    }}
                >
                    <div className={styles.envelope_header}>
                        <EnvelopeOpen size={32} />
                        <h4>Travel Inspiration delivered directly in your inbox</h4>
                    </div>
                    <p className={styles.envelope_title}>Subscribe newsletter to get offers and about new places to discover.</p>
                    <div className={styles.input_field_div}>
                        <input type="text" name="userInput" id="input_field" placeholder="Your mail address" />
                        <button type="submit">Subscribe</button>
                    </div>
                </motion.div>
            </div>
            <div className={styles.videoContainer}>
                <div className={styles.overlay}>
                    <p>Enjoy the immersive experience</p>
                </div>
            </div>
        </div>
    )
}
export default MainContent;