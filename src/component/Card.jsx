import React from "react";
import "./Card.scss";

function Card() {
  return (
    <>
      <div className="MyCard">
        <div className="Myimg">
          <img src="./src/images/foto.png" alt="" />
        </div>
        <div className="Title">
          <h1>Plat de jour</h1>
        </div>
        <div className="Rating">
          <img className="RatingImg" src="./src/images/star.png" alt="" />
          <img className="RatingImg" src="./src/images/star.png" alt="" />
          <img className="RatingImg" src="./src/images/star.png" alt="" />
          <img className="RatingImg" src="./src/images/star.png" alt="" />
          <img className="RatingImg" src="./src/images/rating.png" alt="" />
          <h6>4.5 (673)</h6>
        </div>
        <h2>Steak de cerf</h2>
        <p className="Paragraf">
          Vous aimez les bonnes pièces de viande, mais vous aimez aussi de temps
          en temps essayer quelque chose de nouveau ? Ce steak de cerf aux baies
          de genièvre et à l'orange est un vrai régal dégoulinant de saveurs, au
          sens propre !
        </p>
        <div>
          <hr className="ligne-separation" />
        </div>
        <div className="Button">
          <button>Commander</button>
          <button>Réserver</button>
        </div>
      </div>
    </>
  );
}

export default Card;
