import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import FooterOverlay from "../../components/Footer/FooterOverlay";
import Newsletter from "../../components/Footer/Newsletter";
import images from "../../constants/images";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="kontakt">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h2 className="app__footer-headtext">
          Obecna siedziba Dalajlamy (od 1959)
        </h2>
        <p className="p__opensans">McLeod Ganj k. Dharamsali (płn. Indie)</p>
        <p className="p__opensans">"Mała Lhasa"</p>
        <p className="p__opensans">
          Stan: Himachal Pradesh <br />
          Dystrykt: Kangra
        </p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">
          &quot;Zasady niestosowania przemocy i współczucia, na których
          zbudowana była nasza cywilizacja, mają ogromny potencjał i mogą dobrze
          służyć sprawie pokoju i harmonii na całym świecie.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <a
            href="https://www.facebook.com/Dalajlama-cytaty-100250338722722"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiFacebook />
          </a>
          <a
            href="https://twitter.com/DalaiLama?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiTwitter />
          </a>
          <a
            href="https://www.instagram.com/dalailama"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram />
          </a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h2 className="app__footer-headtext">Tybetański Rząd na Uchodźctwie</h2>
        <p className="p__opensans">Parlament Tybetański na Uchodźstwie</p>
        <p className="p__opensans">Tsuglag Khang - świątynia Dalajlamy</p>
        <p className="p__opensans">Biblioteka Tybetańskich Dzieł i Archiwów</p>
        <p className="p__opensans">
          Instytut Medycyny i Astrologii Tybetańskiej Men-Tsee-Khang
        </p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 - {new Date().getFullYear()}. Radom</p>
    </div>
  </div>
);

export default Footer;
