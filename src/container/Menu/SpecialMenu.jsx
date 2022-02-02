import React, { useState } from "react";
import "./SpecialMenu.css";
import images from "../../constants/images";
import SubHeading from "../../components/SubHeading/SubHeading";
import MenuItem from "../../components/Menuitem/MenuItem";
import data from "../../constants/data";
import Modal from "../../components/Portal/Modal";

const SpecialMenu = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div className="app__specialMenu flex__center section__padding" id="lista">
      <div className="app__specialMenu-title">
        <SubHeading title="lama (o mądrości) jak ocean" />
        <h2 className="headtext__cormorant">Lista Dalajlamów</h2>
      </div>
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <p className="app__specialMenu-menu_heading">sukcesja/okres życia</p>
          <div className="app__specialMenu_menu_items">
            {data.wines.map((wine, index) => (
              <MenuItem
                key={wine.title + index}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.da} alt="..." />
        </div>
        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className="app__specialMenu-menu_heading">sukcesja/okres życia</p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((coctail, index) => (
              <MenuItem
                key={coctail.title + index}
                title={coctail.title}
                price={coctail.price}
                tags={coctail.tags}
              />
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "15px" }}>
        <button
          type="button"
          className="custom__button"
          onClick={() => Toggle()}
        >
          Więcej
        </button>
        <Modal
          show={modal}
          close={Toggle}
          title="Zajmijcie się reinkarnacjami Mao i Denga, ..."
        >
          <p>
            Chińskie władze dążą do przejęcia kontroli nad buddyzmem tybetańskim
            i jego instytucjami, na czele z instytucją dalajlamów, duchowych
            zwierzchników tego buddyzmu. Nie tylko w okupowanym Tybecie, ale i
            poza granicami ChRL. To zgodne z logiką rządów monopartyjnych, które
            nie tolerują żadnej instytucji od nich niezależnej, ale sprzeczne z
            logiką praw człowieka i zasadami demokratycznymi, które stara się
            wcielać w życie diaspora tybetańska pod przewodem XIV Dalajlamy.
          </p>
          <br />
          <p>
            <em>www.polityka.pl/tygodnikpolityka/swiat</em>
          </p>
        </Modal>
      </div>
    </div>
  );
};

export default SpecialMenu;
