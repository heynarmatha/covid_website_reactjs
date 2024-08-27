import React from "react";
import styles from "./style.module.scss";
import leftSideImage from "../../images/left-side-image.png";
import symptompsImage from "../../images/symptomps-image.png";
import rightSideImage from "../../images/right-side-image.png";
import MapSection from "./mapSection";

const SymptomsScreen: React.FC = () => {
  return (
    <>
      <section className={styles.symptompsSectionWrapper}>
        <div className={styles.covidContentComman}>
          <p>
            Corona viruses are a type of virus. There are many different kinds,
            and some cause disease. A newly identified type has caused a recent
            outbreak of respiratory
          </p>
        </div>
        <div className={styles.leftImage}>
          <img src={leftSideImage} alt="Corona Left Side" />
        </div>
        <div className={styles.symptompsImage}>
          <img src={symptompsImage} alt="Symptoms Image" width="100%" />
        </div>
        <div className={styles.rightImage}>
          <img src={rightSideImage} alt="Corona Right Side" />
        </div>
      </section>
      <MapSection />
    </>
  );
};

export default SymptomsScreen;
