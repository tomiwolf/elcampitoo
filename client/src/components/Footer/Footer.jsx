import React from "react";
import styles from "./Footer.module.css"
import logoFooter from "../../img/icons/logoFooter.svg"
import wpp from "../../img/icons/wpp.svg"
import email from "../../img/icons/email.svg"
import location from "../../img/icons/location.svg"
import ig from "../../img/icons/IG.svg"
import fb from "../../img/icons/FB.svg"
import yt from "../../img/icons/YT.svg"
import tw from "../../img/icons/TW.svg"

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
          <div className={styles.infoContainer}>
            <div>
              <img src={logoFooter} className={styles.imgFooter} alt="Logo" />
            </div>
            <div>
              <div className={styles.infoIconsDiv}>
                <img src={wpp} alt="Whatsapp icon" className={styles.infoIcons} />
                <p className={styles.infoIconsText}>+54 9 11 2537 1316</p>
              </div>
              <div className={styles.infoIconsDiv}>
                <img src={email} alt="Email icon" className={styles.infoIcons} />
                <p className={styles.infoIconsText}>
                  versiagregamosmail@mail.com.ar
                </p>
              </div>
              <div className={styles.infoIconsDiv}>
                <img
                  src={location}
                  alt="Location icon"
                  className={styles.infoIcons}
                />
                <p className={styles.infoIconsText}>
                  Estamos en Esteban Echeverria, Argentina.
                </p>
              </div>
            </div>
            <div>
              <p className={styles.seguinos}>¡Seguinos!</p>
              <div>
                <a
                  href="https://www.instagram.com/refugioelcampihref/"
                  rel="noreferrer"
                >
                  <img
                    src={ig}
                    alt="Instagram icon"
                    className={styles.socialIcons}
                  />
                </a>
                <a
                  href="https://www.facebook.com/elcampihrefrefugio" rel="noreferrer" >
                  <img
                    src={fb}
                    alt="Facebook icon"
                    className={styles.socialIcons}
                  />
                </a>
                <a
                  href="https://www.youtube.com/@campihrefrefugio" rel="noreferrer">
                  <img src={yt} alt="Youtube icon" className={styles.socialIcons} />
                </a>
                <a
                  href="https://twitter.com/elcampihref" rel="noreferrer">
                  <img src={tw} alt="Twitter icon" className={styles.socialIcons} />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.copyrightContainer}>
            <p className={styles.copyright}>
              El Campihref Refugio hrefdos los derechos reservados.
            </p>
          </div>
        </div>
      );
    };

export default Footer;