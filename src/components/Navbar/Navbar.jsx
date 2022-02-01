import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import images from "../../constants/images";
import Modal from "../Portal/Modal";
import Modal1 from "../Portal/Modal";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const Toggle = () => setModal(!modal);
  const Toggle1 = () => setModal1(!modal1);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.g} alt="..." />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#start">Start</a>
        </li>
        <li className="p__opensans">
          <a href="#symbole">Symbole</a>
        </li>
        <li className="p__opensans">
          <a href="#lista">Wcielenia</a>
        </li>
        <li className="p__opensans">
          <a href="#słowa">Słowa</a>
        </li>
        <li className="p__opensans">
          <a href="#słowa">Słowa</a>
        </li>
        <li className="p__opensans">
          <a href="#foto">Foto</a>
        </li>
        <li className="p__opensans">
          <a href="#sentencje">Sentencje</a>
        </li>
        <li className="p__opensans">
          <a href="#kontakt">Kontakt</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a className="p__opensans" onClick={() => Toggle()}>
          Zobacz
        </a>
        <Modal show={modal} close={Toggle} title="O postawie medytacyjnej">
          <p>
            Dzieci zawsze patrzą na swoich rodziców. Rodzice powinni być
            bardziej wyciszeni. Można uświadomić dzieciom, że zawsze będziemy
            napotykać wiele problemów, ale powinniśmy reagować na nie ze
            spokojnym umysłem i kierując się rozsądkiem. Moim zdaniem,
            współczesny system edukacyjny skupia się na rozwoju intelektu,
            zaniedbując sferę emocjonalną, dobroć serca uważa się za coś
            oczywistego, coś czego nie trzeba się uczyć.
          </p>
          <br />
          <p>
            <em>
              dziecisawazne.pl/10-cytatow-z-dalajlamy-o-rodzicielstwie-i-rodzinie
            </em>
          </p>
        </Modal>
        <div />
        <a onClick={() => Toggle1()} className="p__opensans">
          Czytaj
        </a>
        <Modal1 show={modal1} close={Toggle1} title="O dziecięcej złości">
          <p>
            Spójrz na dzieci. Oczywiście mogą się kłócić, ale ogólnie rzecz
            biorąc nie żywią do siebie urazy tak długo, jak robią to dorośli.
            Większość dorosłych uczy dzieci swoim przykładem. Ale czego oni tak
            naprawdę uczą, kiedy pokazują wielki uśmiech, pod którym gdzieś
            głęboko, w środku, kryją się negatywne uczucia? Dzieci zazwyczaj nie
            działają w taki sposób. Jeśli czują złość w stosunku do kogoś,
            wyrażają ją i wtedy to się kończy. Następnego dnia dalej bawią się z
            tą osobą.
          </p>
          <br />
          <p>
            <em>
              dziecisawazne.pl/10-cytatow-z-dalajlamy-o-rodzicielstwie-i-rodzinie
            </em>
          </p>
        </Modal1>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdClose
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans" onClick={() => setToggleMenu(false)}>
                <a href="#start">Start</a>
              </li>
              <li className="p__opensans" onClick={() => setToggleMenu(false)}>
                <a href="#symbole">Symbole</a>
              </li>
              <li className="p__opensans" onClick={() => setToggleMenu(false)}>
                <a href="#lista">Wcielenia</a>
              </li>
              <li className="p__opensans" onClick={() => setToggleMenu(false)}>
                <a href="#słowa">Słowa</a>
              </li>
              <li className="p__opensans" onClick={() => setToggleMenu(false)}>
                <a href="#cytaty">Cytaty</a>
              </li>
              <li className="p__opensans" onClick={() => setToggleMenu(false)}>
                <a href="#foto">Foto</a>
              </li>
              <li className="p__opensans" onClick={() => setToggleMenu(false)}>
                <a href="#sentencje">Sentencje</a>
              </li>
              <li className="p__opensans" onClick={() => setToggleMenu(false)}>
                <a href="#kontakt">Kontakt</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
