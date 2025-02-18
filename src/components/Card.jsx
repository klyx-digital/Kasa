import React from "react";
import Appartements from "../../public/datas";
import { Link } from "react-router";

function Card(props) {
  return (
    <div className="card">
      {Appartements.map((Appartement) => (
        <Link to={`/logement/${Appartement.id}`}>
          <figure key={Appartement.id} id={Appartement.id}>
            <img
              src={Appartement.cover}
              alt={Appartement.title}
              className="cardImage"
            />
            <figcaption className="cardTitle">
              <h2>{Appartement.title}</h2>
            </figcaption>
          </figure>
        </Link>
      ))}
    </div>
  );
}

export default Card;
