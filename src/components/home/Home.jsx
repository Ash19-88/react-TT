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
          <section id="landing" aria-label="Bienvenida">
            <p className={styles.welcomeText}>¡Bienvenido!</p>
            <p className={styles.offersText}>
              Las mejores ofertas, solo para ti
            </p>
            <Link
              to={"/shop"}
              className={`${styles.btnPrimary} btn-lg`}
              aria-label="Ir a la tienda"
            >
              Visitar Tienda
            </Link>
          </section>
          <div className={styles.videoContainer}>
            <video
              autoPlay
              loop
              muted
              title="Video promocional Ash Market"
              aria-label="Video promocional Ash Market"
            >
              <source src={videoSrc} type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          </div>
        </div>
        <section id="reviews" aria-label="Testimonios de clientes">
          <h2 className={styles.reviewsTitle}>Nuestros clientes</h2>
          <div className={styles.reviewsContainer}>
            {[
              {
                name: "Juan Pérez",
                review: "Excelente servicio, calidad garantizada.",
                stars: 5,
              },
              {
                name: "María López",
                review: "Muy satisfecha con la compra, volveré sin dudas.",
                stars: 4,
              },
              {
                name: "Carlos García",
                review: "Gran atención y productos de alta calidad.",
                stars: 4,
              },
              {
                name: "Ana Torres",
                review: "Una experiencia de compra inigualable.",
                stars: 5,
              },
              {
                name: "Diego Martínez",
                review: "Productos excelentes y envío rápido.",
                stars: 4,
              },
            ].map((r) => (
              <div key={r.name} className={`${styles.review} grid-item`}>
                <h5>{r.name}</h5>
                <p>"{r.review}"</p>
                <div
                  className={styles.stars}
                  aria-label={`Valoración: ${r.stars} de 5`}
                >
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`bi ${
                        i < r.stars ? "bi-star-fill" : "bi-star"
                      }`}
                      aria-hidden="true"
                    ></i>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
