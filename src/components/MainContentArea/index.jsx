import { motion } from "framer-motion";
import styles from './maincontent.module.css'
import SimpleImageSlider from "react-simple-image-slider";
import { getImageUrl } from '../../utils/functions';
import { EnvelopeOpen } from "@phosphor-icons/react";


const MainContent = () => {
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
                <SimpleImageSlider width={"100%"} height={"100%"} images={images} showBullets={false} showNavs={false} slideDuration={0.25} autoPlay={true}  />
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