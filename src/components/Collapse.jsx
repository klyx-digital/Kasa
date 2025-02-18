import React from "react";
import { useState } from "react";
import Down from "../assets/icons/Down.svg";
import Up from "../assets/icons/Up.svg";

function Collapse({ titre, texte }) {
  const [Ouverture, setOuverture] = useState(false);

  const basculer = () => {
    setOuverture(!Ouverture);
  };

  return (
    <section className="pageCollapse">
      <div className="Collapse">
        <h2>{titre}</h2>
        <img src={Ouverture ? Up : Down} alt="Icone" onClick={basculer} />
      </div>
      <div className={`texteCollapse ${Ouverture ? "ouvert" : ""}`}>
        <p>{texte}</p>
      </div>
    </section>
  );
}

export default Collapse;
