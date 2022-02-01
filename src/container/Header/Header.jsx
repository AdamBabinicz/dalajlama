import React, { useState } from "react";
import "./Header.css";
import images from "../../constants/images";
import SubHeading from "../../components/SubHeading/SubHeading";
import Modal from "../../components/Portal/Modal";

const Header = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div className="app__header app__wrapper section__padding">
      <div className="app__wrapper_info">
        <SubHeading title="duchowy i polityczny przywódca narodu tybetańskiego" />
        <h1 className="app__header-h1">
          Tenzin&nbsp;Gjaco, XIV&nbsp;Dalajlama
        </h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Dalajlama w kwietniu 2016 potwierdził, że będzie żył 113 lat w obecnym
          wcieleniu, czyli odejdzie w roku 2048 lub 2049. Tradycją w linii
          dalajlamów jest, że informują oni o swoich datach śmierci i datach
          ponownych inkarnacji. Wybrani dostojnicy buddyjscy wędrują po kraju,
          starając się odnaleźć dziecko, kolejną inkarnację i oficjalnie
          potwierdzają ten fakt.
        </p>
        <button
          type="button"
          className="custom__button"
          onClick={() => Toggle()}
        >
          Więcej
        </button>
        <Modal show={modal} close={Toggle} title="O współczuciu">
          <p>
            Jeżeli damy naszym dzieciom wiedzę, nie dając im współczucia, ich
            stosunek do innych będzie konglomeratem zazdrości wobec tych, którzy
            nad nimi górują, agresywnego współzawodnictwa z tymi, którzy są im
            równi oraz pogardy dla słabszych. Mieszanina takich uczuć rodzi
            skłonność do chciwości, arogancji, nieumiarkowania oraz bardzo
            szybko odbiera poczucie szczęścia. Wiedza jest ważna, niemniej o
            wiele większe znaczenie ma sposób, w jaki ją wykorzystujemy. A to
            zależy od serca i umysłu. Edukacja jest czymś więcej, niż
            przekazywaniem wiedzy i umiejętności, pozwalających osiągać
            konkretne cele. Polega też na otwieraniu oczu dziecka na potrzeby i
            prawa innych.
          </p>
          <br />
          <p>
            <em>
              dziecisawazne.pl/10-cytatow-z-dalajlamy-o-rodzicielstwie-i-rodzinie
            </em>
          </p>
        </Modal>
      </div>
      <div className="app__wrapper_img">
        <img src={images.ge} alt="..." />
      </div>
    </div>
  );
};

export default Header;
