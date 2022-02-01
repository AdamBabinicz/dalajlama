import React, { useState, useRef } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import SubHeading from "../../components/SubHeading/SubHeading";
import images from "../../constants/images";
import "./Gallery.css";
import Modal from "../../components/Portal/Modal";

const Gallery = () => {
  const scrollRef = useRef(null);
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center" id="foto">
      <div className="app__gallery-content">
        <SubHeading title="Google" />
        <h2 className="headtext__cormorant">Galeria</h2>
        <p
          className="p__opensans"
          style={{ color: "#AAAAAA", marginTop: "2rem" }}
        >
          Przedstawiciel szkoły gelug – jednej z czterech największych szkół
          buddyzmu tybetańskiego. Buddyści tybetańscy uważają Dalajlamę za
          manifestację bodhisattwy współczucia Awalokiteśwary, który odradza
          się, aby udostępniać wyzwalające z cierpienia nauki innym czującym
          istotom.
        </p>
        <button
          type="button"
          className="custom__button"
          onClick={() => Toggle()}
        >
          Więcej
        </button>
        <Modal show={modal} close={Toggle} title="Kundun">
          <p>
            22 lutego 1950 Lhamo Thondup został intronizowany jako XIV
            Dalajlama. Stało się to po tym, jak wyświęcono go na mnicha i nadano
            imię duchowe: Dzietsyn Dziambel Ngałang Losang Jeszie Tenzin Gjaco –
            Najczcigodniejszy, Doskonałej Chwały, Elokwentny, Inteligentny
            Dzierżawca Nauk, Ocean Mądrości. Jednak tybetańscy buddyści
            zazwyczaj mówią o nim Yeshe Norbu (Klejnot spełniający życzenia) lub
            Kundun (Obecność). Od tego momentu, zgodnie z tybetańską tradycją,
            jest przywódcą duchowym i politycznym Tybetu. Od 1959 roku, kiedy
            upadła antychińska i antykomunistyczna rewolta, przebywa na
            emigracji i odwiedzając różne kraje walczy o poszanowanie praw
            człowieka, eksponując problematyczną sytuację Tybetu.
          </p>
          <br />
          <p>
            <em>www.990px.pl/index.php/2010/02/22/28-zdjec-z-xiv-dalajlama</em>
          </p>
        </Modal>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[
            images.gallery01,
            images.gallery02,
            images.gallery03,
            images.gallery04,
            images.gallery05,
            images.gallery06,
            images.gallery07,
          ].map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
