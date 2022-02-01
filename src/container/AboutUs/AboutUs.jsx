import React, { useState } from "react";
import "./AboutUs.css";
import images from "../../constants/images";
import Modal from "../../components/Portal/Modal";
import Modal1 from "../../components/Portal/Modal";

const AboutUs = () => {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const Toggle = () => setModal(!modal);
  const Toggle1 = () => setModal1(!modal1);

  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="symbole"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src={images.gh} alt="..." />
      </div>
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h2 className="headtext__cormorant">Symbole</h2>
          <img src={images.d} alt="..." className="spoon__img" />
          <p className="p__opensans">Koło dharmy (Dharmachakra)</p>
          <p className="p__opensans">Mandala</p>
          <p className="p__opensans">Kwiat lotosu</p>
          <p className="p__opensans">Tomoe</p>
          <p className="p__opensans">Phurba</p>
          <button
            type="button"
            className="custom__button"
            onClick={() => Toggle()}
          >
            Więcej
          </button>
          <Modal show={modal} close={Toggle} title="Czym są symbole buddyzmu?">
            <p>
              Tak jak dla innych wierzeń symbole stanowią część kultu.
              Zdecydowanie kojarzone są z prawdami buddyzmu i mają ogromne
              znaczenie dla praktykujących. Przypisuje się im dodatkowe
              znaczenie, które pozwala zrozumieć otaczającą ludzi rzeczywistość.
              Co ciekawe to właśnie w buddyzmie symbolika odgrywa szczególną
              rolę. Warto więc poznać najważniejsze buddyjskie symbole i ich
              znaczenie.
            </p>
            <br />
            <p>
              <em>
                buddha.info.pl/symbole-buddyzmu-krotka-charakterystyka-i-omowienie
              </em>
            </p>
          </Modal>
        </div>
        <div className="app__aboutus-content_knife flex__center">
          <img src={images.sp} alt="..." />
        </div>
        <div className="app__aboutus-content_history">
          <h2 className="headtext__cormorant">Tybetańskie</h2>
          <img src={images.d} alt="..." className="spoon__img" />
          <p className="p__opensans">Złote ryby</p>
          <p className="p__opensans">Zdobiony Parasol</p>
          <p className="p__opensans">Kartika (Drigug, Grigug)</p>
          <p className="p__opensans">Ghanta</p>
          <p className="p__opensans">Waza skarbów</p>Waza skarbów
          <button
            type="button"
            className="custom__button"
            onClick={() => Toggle1()}
          >
            Więcej
          </button>
          <Modal1
            show={modal1}
            close={Toggle1}
            title="Co znaczą symbole buddyzmu?"
          >
            <p>
              Symbole buddyzmu znajdują szerokie zastosowanie w regularnej
              praktyce religijnej. Wbrew pozorom nie są to nic nieznaczące
              grafiki. Każdy z nich pokazuje pewną historię. Przypisuje się im
              ważne znaczenie w codziennym życiu. To bardzo ciekawe uzupełnienie
              religijne, które pozwala zrozumieć to, co otacza nas dookoła. Nie
              bez powodu można je znaleźć jako elementy biżuterii czy jako
              ozdoby w domu. Wszystko zależy od tego, w jaki sposób je
              traktujemy. Należy oczywiście pamiętać, żeby nie używać ich bez
              refleksji, ponieważ dla niektórych mają zdecydowanie bardzo ważne
              znaczenie.
            </p>
            <br />
            <p>
              <em>
                buddha.info.pl/symbole-buddyzmu-krotka-charakterystyka-i-omowienie
              </em>
            </p>
          </Modal1>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
