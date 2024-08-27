import React from "react";
import bannerImage from "../../images/banner-image.png";
import styles from "./style.module.scss"; // Import the CSS module
import virusImage from "../../images/Corona virus.png";
import detailsImage from "../../images/details-corono.png";

const OverviewScreen = () => {
  return (
    <div>
      <section className={styles.bannerSectionWrapper}>
        <div className={styles.bannerSection}>
          <div className={styles.bannerImage}>
            <img src={bannerImage} alt="banner-image" width="100%" />
          </div>
          <div className={styles.bannerContent}>
            <h5>COVID-19 Alert</h5>
            <h3>Stay at Home Quarantine To Stop Corona Virus</h3>
            <p>
              There is no specific medicine to prevent or treat coronavirus
              disease (COVID-19). People may need supportive care to .
            </p>
            <button>Let Us Help</button>
          </div>
        </div>
      </section>
      <section className={styles.detailsCoronaWrapper}>
        <div className={styles.detailsSection}>
          <div className={styles.detailsImage}>
            <img
              src={virusImage}
              alt="corona-virus"
              width="100%"
              className="image-postion"
            />
          </div>
          <div className={styles.detailsContent}>
            <h5>What Is Covid-19</h5>
            <h3>Coronavirus</h3>
            <p>
              Corona viruses are a type of virus. There are many different
              kinds, and some cause disease. A newly identified type has caused
              a recent outbreak of respiratory illness now called COVID-19.
              Lauren Sauer, M.S., the director of operations with the Johns
              Hopkins Office of Critical Event Preparedness and Response
            </p>
            <button>Learn More</button>
          </div>
        </div>
        <div className={styles.postion2}>
          <img src={detailsImage} alt="corono" />
        </div>
      </section>
    </div>
  );
};

export default OverviewScreen;
