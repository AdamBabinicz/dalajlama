import React, { useState } from "react";
import "./Newsletter.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import Modal from "../../components/Portal/Modal";

const Newsletter = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Zapamiętaj!" />
        <h6 className="headtext__cormorant">
          "Nie pozwól, aby zachowanie innych zniszczyło twój wewnętrzny spokój."
        </h6>
        <p className="p__opensans">
          "Tylko jedna mała, pozytywna myśl nad ranem może zmienić cały dzień."
        </p>
      </div>
      <div className="app__newsletter-input flex__center">
        <button className="custom__button" onClick={() => Toggle()}>
          Więcej
        </button>
        <Modal
          show={modal}
          close={Toggle}
          title="O potrzebie kontaktu z samym sobą"
        >
          <p>
            Spędź trochę czasu w samotności każdego dnia. Zostając sam na sam ze
            swoimi myślami, znajdziesz ocean niewyczerpanej inspiracji. Zatop
            się na kilka chwil w ciszy, całkowicie oddzielony od innych ludzi, a
            usłyszysz pieśń swojego ducha. Ta pieśń nigdy nie ustaje, lecz w
            towarzystwie nie słyszymy jej. Wsłuchaj się zatem w siebie każdego
            dnia; chociaż przez chwilę. Z pewnością poznasz tajemnice, których
            istnienia nawet nie podejrzewałeś.
          </p>
          <br />
          <p>
            <em>
              dziecisawazne.pl/10-cytatow-z-dalajlamy-o-rodzicielstwie-i-rodzinie
            </em>
          </p>
        </Modal>
      </div>
    </div>
  );
};

export default Newsletter;
