import React from "react";
import starActive from "../assets/icons/star.svg";
import starInactive from "../assets/icons/starInactif.svg";

const PropertyCard = ({ appartement }) => {
  const { title, location, host, tags, rating } = appartement;
  const [prenom, nom] = host.name.split(" ");

  const etoiles = (rating) => {
    const star = [];
    const nombreEtoile = Number(rating);

    for (let i = 0; i < 5; i++) {
      star.push(
        <img
          key={i}
          src={i <= nombreEtoile ? starActive : starInactive}
          alt={i <= nombreEtoile ? "Etoile Active" : "Etoile Inactive"}
        />
      );
    }
    return star;
  };

  return (
    <section className="property">
      <div>
        <div>
          <h1 className="title">{title}</h1>
          <p>{location}</p>
        </div>
        <div className="tags">
          {tags.map((tag, index) => (
            <p className="tag" key={index}>
              {tag}
            </p>
          ))}
        </div>
      </div>
      <div className="containerStar">
        <div className="host">
          <p>
            {prenom} <br /> {nom}
          </p>
          <img src={host.picture} alt={host.name} />
        </div>
        <div className="rating">{etoiles(rating)}</div>
      </div>
    </section>
  );
};

export default PropertyCard;
