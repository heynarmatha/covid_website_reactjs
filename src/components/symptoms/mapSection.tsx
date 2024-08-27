import React from "react";
import styles from "./style.module.scss";
import mapImage from "../../images/map-images.png";
import { CountryReport } from "../../utils/types";
import { countryReports } from "../../utils/data";

const Report: React.FC<CountryReport> = ({
  name,
  image,
  count,
  arrow,
  color,
}) => (
  <div className={styles.reportOne}>
    <div className={styles.country}>
      <img src={image} alt={name} />
      <span>{name}</span>
    </div>
    <div className={styles.reportCount}>
      <span className={styles.count}>{count}</span>
      <span className={styles.upDown} style={{ color }}>
        <i className={`bx bxs-${arrow}-arrow`}></i>
      </span>
    </div>
  </div>
);

const MapSection: React.FC = () => {
  return (
    <section className={styles.mapSectionWrapper}>
      <div className={styles.mapSection}>
        <div className={styles.mapImage}>
          <img src={mapImage} alt="Map" width="100%" />
        </div>
        <div className={styles.liveReport}>
          <div className={styles.reportHeading}>
            <div>
              <h3>Live Reports</h3>
            </div>
            <div className={styles.next}>
              <h5 className={styles.left}>
                <i className="bx bx-chevron-left"></i>
              </h5>
              <h5 className={styles.right}>
                <i className="bx bx-chevron-right"></i>
              </h5>
            </div>
          </div>
          {countryReports.map((report) => (
            <Report key={report.name} {...report} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MapSection;
