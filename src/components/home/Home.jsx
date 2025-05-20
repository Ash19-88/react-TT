import React from "react";
import videoSrc from "../../assets/videos/fullvideo.mp4";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Home = () => {
  return (
    <main>
      <div className="container text-center my-5">
        <div className={styles.mainContent}>
          <section id="landing">
            <p className={styles.welcomeText}>¡Bienvenido!</p>
            <p className={styles.offersText}>
              Las mejores ofertas, solo para ti
            </p>
            <Link to={"/shop"} className={`${styles.btnPrimary} btn-lg`}>
              Visitar Tienda
            </Link>
          </section>
          <div className={styles.videoContainer}>
            <video autoPlay loop muted>
              <source src={videoSrc} type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          </div>
        </div>
        <section id="reviews">
          <h2 className={styles.reviewsTitle}>Nuestros clientes</h2>
          <div className={styles.reviewsContainer}>
            <div className={`${styles.review} grid-item`}>
              <h5>Juan Pérez</h5>
              <p>"Excelente servicio, calidad garantizada."</p>
              <div className={styles.stars}>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>
            <div className={`${styles.review} grid-item`}>
              <h5>María López</h5>
              <p>"Muy satisfecha con la compra, volveré sin dudas."</p>
              <div className={styles.stars}>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star"></i>
              </div>
            </div>
            <div className={`${styles.review} grid-item`}>
              <h5>Carlos García</h5>
              <p>"Gran atención y productos de alta calidad."</p>
              <div className={styles.stars}>
                 <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star"></i>
              </div>
            </div>
            <div className={`${styles.review} grid-item`}>
              <h5>Ana Torres</h5>
              <p>"Una experiencia de compra inigualable."</p>
              <div className={styles.stars}>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>
            <div className={`${styles.review} grid-item`}>
              <h5>Diego Martínez</h5>
              <p>"Productos excelentes y envío rápido."</p>
              <div className={styles.stars}>
                 <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star"></i>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
