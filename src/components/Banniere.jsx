import React from "react";

function Banniere(props) {
  return (
    <div>
      <figure className={props.className}>
        <img src={props.src} alt="Paysage" />
        <figcaption>
          <h1 className="titreBanniere">{props.titre}</h1>
        </figcaption>
      </figure>
    </div>
  );
}

export default Banniere;
