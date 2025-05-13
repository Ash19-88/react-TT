import React from 'react'
import videoSrc from '../../assets/videos/fullvideo.mp4';
import styles from './Home.module.css';

const Home = () => {
  return (
    <main>     
      <div className="container text-center my-5">  
        <div className={styles.mainContent}>     
          <section id="landing">
            <p className={styles.welcomeText}>¡Bienvenido!</p>
            <p className={styles.offersText}>Las mejores ofertas, solo para ti</p>
            <a href="shop.html" className={`${styles.btnPrimary} btn-lg`}>Visitar Tienda</a>
          </section>
          <div className={styles.videoContainer}>
            <video autoPlay loop muted>
              <source src={videoSrc} type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
