import styles from './aboutus.module.css'

const Aboutus = () => {
    return(
<section className={styles.about_us_section}>
  <div className={styles.about_us_container}>
    <h1>Welcome to NomadNest</h1>
    <p>
      At NomadNest, we believe that travel is more than just a getaway — it’s a way of life. 
      Our journey began with a simple goal: to create a sanctuary for wanderers, explorers, and dreamers. Whether you're planning your first trip abroad or you're a seasoned traveler, NomadNest is here to be your ultimate travel companion.
    </p>

    <h2>Our Story</h2>
    <p>
      NomadNest was born from the collective wanderlust of a group of friends who wanted to bridge the gap between planning a trip and living it. We realized that travel shouldn't feel like a logistical puzzle. It should feel like a story waiting to unfold. 
      That's why we designed NomadNest as a platform that makes it easier, more personal, and more inspiring to explore the world.
    </p>

    <h2>What We Offer</h2>
    <p>
      We curate local experiences, must-visit spots, hidden gems, and traveler-friendly tools to make every journey seamless and memorable. From itinerary suggestions to cultural insights and real-time location-based guides, NomadNest helps you find not just places, but moments worth cherishing.
    </p>
    <ul>
      <li>In-depth guides for cities, towns, and remote regions</li>
      <li>User-generated recommendations and reviews</li>
      <li>Smart tools for planning, organizing, and sharing trips</li>
      <li>Exclusive tips from locals and seasoned travelers</li>
    </ul>

    <h2>Our Mission</h2>
    <p>
      We aim to empower modern travelers by giving them the tools, inspiration, and confidence to create their own adventures. We believe in slow travel, sustainable tourism, and the magic of connecting with local cultures. 
      At NomadNest, we don’t just help you visit places — we help you *feel* them.
    </p>

    <h2>Meet the Team</h2>
    <p>
      We are a diverse team of storytellers, developers, travel writers, and creatives — united by a shared passion for exploration. Every line of code, every article, every design at NomadNest is driven by the question: 
      “How can we make travel more human?”
    </p>

    <h2>Why Choose NomadNest?</h2>
    <p>
      We’re not a booking engine. We’re not just a blog. NomadNest is a thoughtfully crafted platform where travel meets purpose. Whether you're looking for quiet mountain escapes, bustling street food scenes, or soulful solo journeys, 
      we’re here to guide you.
    </p>
    <ul>
      <li>Intuitive design focused on ease-of-use</li>
      <li>Community-first: share your experiences and connect with others</li>
      <li>Constantly evolving features tailored to real travelers' needs</li>
    </ul>

    <h2>Join the Nest</h2>
    <p>
      Every traveler has a story. NomadNest is where those stories begin, grow, and are shared. So, whether you’re planning, reminiscing, or just dreaming — you have a home here.
      Welcome to NomadNest. Your next adventure starts now.
    </p>
  </div>
</section>)}

export default Aboutus;
