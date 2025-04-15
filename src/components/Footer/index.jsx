import styles from './footer.module.css'

const Footer = () => {
    return(
        <>
<footer className={styles.footer}>
  
  <div className={styles.footer_section}>
    <h3>NomadNest</h3>
    <p>Your personalized travel planner.</p>
  </div>

  
  <div className={styles.footer_section}>
    <h3>Quick Links</h3>
    <a href="/">Home</a>
    <a href="/explore">Explore Places</a>
    <a href="/categories">Categories</a>
    <a href="/contact">Contact</a>
  </div>

  
  <div className={styles.footer_section}>
    <h3>Contact</h3>
    <p>Email: support@Nomadnest.com</p>
    <p>Website: www.Nomadnest.com</p>
    <div className={styles.social_icons}>
       <a>Insta</a>
       <a>FB</a>
       <a>Twitter</a>
    </div>
  </div>

  
  <div className={styles.footer_bottom}>
    © 2025 Nomadnest. All rights reserved.
  </div>
</footer> 
</>
)}
export default Footer;
