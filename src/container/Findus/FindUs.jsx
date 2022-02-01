import React, { useState } from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import images from "../../constants/images";
import Modal from "../../components/Portal/Modal";

const FindUs = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div className="app__bg app__wrapper section__padding" id="sentencje">
      <div className="app__wrapper_info">
        <SubHeading title="Sentencje" />
        <h2 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
          Zasady życia w/g Dalajlamy
        </h2>
        <div className="app__wrapper-content">
          <p className="p__opensans">
            "Weź pod uwagę, że wielka miłość i wielkie osiągnięcia niosą ze sobą
            wielkie ryzyko".
          </p>
          <p
            className="__cormorant"
            style={{ color: "#dcca87", margin: "2rem 0" }}
          >
            "Kiedy przegrywasz, nie przegrywaj lekcji".
          </p>
          <p className="p__opensans">
            "Podążaj za trzema rzeczami: szacunkiem dla innych ludzi, szacunkiem
            dla siebie oraz odpowiedzialnością za wszystkie swoje czyny".
          </p>
          <br />
          <p className="p__opensans">
            "Pamiętaj, że nie otrzymać tego, czego się chce, to czasem wspaniały
            łut szczęścia".
          </p>
        </div>
        <button
          className="custom__button"
          style={{ marginTop: "2rem" }}
          onClick={() => Toggle()}
        >
          Więcej
        </button>
        <Modal
          show={modal}
          close={Toggle}
          title="Udane życie i utrzymanie pozytywnej energii"
        >
          <p>
            Nie otaczaj się ludźmi, którzy potrzebują cię tylko do tego, by się
            poskarżyć, dzielić problemami, tragicznymi historiami, lękiem i
            osądzają przy tobie innych. Nie bądź czyimś koszem na śmieci.
          </p>
          <br />
          <p>
            Dotrzymuj obietnic. Jeśli nie dotrzymujesz obietnicy, pamiętaj, że
            zawsze możesz przeprosić, zmienić zdanie, zaproponować alternatywne
            rozwiązanie, albo powiedzieć „nie” jeszcze na samym początku.
          </p>
          <br />
          <p>
            Staw czoło toksycznym sytuacjom, w które jesteś zamieszany,
            począwszy od ciągłego „ratowania” znajomego czy członka rodziny z
            opresji, po tolerowanie negatywnych zachowań innych osób wobec
            ciebie.
          </p>
          <br />
          <p>
            <em>dojczland.info/sposob-na-udane-zycie</em>
          </p>
        </Modal>
      </div>
      <div className="app__wrapper_img">
        <img src={images.dalaj} alt="..." />
      </div>
    </div>
  );
};

export default FindUs;
