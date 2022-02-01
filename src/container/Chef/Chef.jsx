import React from "react";
import "./Chef.css";
import images from "../../constants/images";
import SubHeading from "../../components/SubHeading/SubHeading";

const Chef = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="słowa">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.dal} alt="..." />
        {/* <img src={images.dala} alt="..." /> */}
      </div>
      <div className="app__wrapper_info">
        <SubHeading title="Najczcigodniejszy, Doskonałej Chwały, Elokwentny, Inteligentny Dzierżawca Nauk, Ocean Mądrości" />
        <h2 className="headtext__cormorant">Klejnot spełniający życzenia</h2>
        <br />
        <div className="app_chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="..." />
            <p className="p__opensans">
              Każdego dnia, jak tylko się obudzisz, pomyśl: dzisiaj mam
              szczęście, że żyję, posiadam cenne ludzkie życie i nie będę go
              marnować.
            </p>
          </div>
          <p className="p__opensans">
            Użyję wszystkich swoich sił, by rozwijać siebie, kierować moje serce
            do innych; by osiągnąć oświecenie dla dobra wszystkich istot.
            Zamierzam dobrze myśleć o innych, nie będę się gniewać ani źle
            myśleć o innych. Będę przynosił innym tak wiele korzyści, jak tylko
            jestem w stanie.
          </p>
        </div>
        <div className="app__chef-sign">
          <p>Dalajlama</p>
          <p className="p__opensans">O szczęściu.</p>
          <img src={images.sign} alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Chef;
