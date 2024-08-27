import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./style.module.scss";
import logoImage from "../../images/logo-image.png";
import Footer from "../footer";

const Layout: React.FC = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleToggleClick = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div>
      <header className={styles.headerWrapper}>
        <div className={styles.headerSection}>
          <div className={styles.logo}>
            <img src={logoImage} alt="logo-image" />
            <h5>COVID-19</h5>
          </div>
          <button
            onClick={handleToggleClick}
            className={`${styles.toggleButton} ${
              isNavbarOpen ? styles.open : ""
            }`}
          >
            <div></div>
          </button>
          <div
            className={`${styles.navbarLinks} ${
              isNavbarOpen ? styles.active : ""
            }`}
          >
            <nav>
              <ul>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : ""
                    }
                    onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                  >
                    Overview
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/symptoms"
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : ""
                    }
                    onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                  >
                    Symptoms
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contagion"
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : ""
                    }
                    onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                  >
                    Contagion
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
