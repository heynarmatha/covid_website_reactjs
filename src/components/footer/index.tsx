import React from "react";
import styles from "./style.module.scss";
import logoImage from "../../images/logo-image.png";
import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerSection}>
        <div className={styles.logo}>
          <img src={logoImage} alt="logo-image" />
          <h5>COVID-19</h5>
        </div>
        <div className={styles.footerLinks}>
          <ul>
            <li>
              <NavLink to="/">Overview</NavLink>
            </li>
            <li>
              <NavLink to="/contagion">Contagion</NavLink>
            </li>
            <li>
              <NavLink to="/symptoms">Symptoms</NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.footerIcon}>
          <ul>
            <li>
              <a href="">
                <i className="bx bxl-facebook"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bx bxl-youtube youtubeIcon"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bx bxl-vimeo"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bx bxl-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyrightsSection}>
        2020 @ All rights reserved by pixelspark.co
      </div>
    </footer>
  );
};

export default Footer;
