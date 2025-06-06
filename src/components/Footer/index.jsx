import styles from './footer.module.css'

const Footer = ({selectedPage}) => {
  return (
    <>
      <footer className={styles.footer}>

        <div className={styles.footer_section}>
          <h3>NomadNest</h3>
          <p>Your personalized travel planner.</p>
        </div>


        <div className={styles.footer_section}>
          <h3>Quick Links</h3>
          <p className={styles.nav_item} onClick={() => selectedPage("Home")}>Home</p>
          <p className={styles.nav_item} onClick={() => selectedPage("ExplorePlaces")} > Explore Places </p>
          <p className={styles.nav_item} onClick={() => selectedPage("Aboutus")} >About Us</p>
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
  )
}
export default Footer;
