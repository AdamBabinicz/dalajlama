import React from "react";
import "./Laurels.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import images from "../../constants/images";
import data from "../../constants/data";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="..." />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#dcca87" }}>
        {title}
      </p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="cytaty">
      <div className="app__wrapper_info">
        <SubHeading title="często używanie zaimków osobowych (ja, mnie, moje) zwiększa ryzyko zawału" />
        <h2 className="headtext__cormorant">
          Zbyt duże ego burzy nasze szczęście
        </h2>
        <div className="app__laurels_awards">
          {data.awards.map((award) => (
            <AwardCard award={award} key={award.title} />
          ))}
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.laurels} alt="..." />
      </div>
    </div>
  );
};

export default Laurels;
