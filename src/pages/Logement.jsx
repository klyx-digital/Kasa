import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Appartements from "../../public/datas";
import Slideshow from "../components/Slideshow";
import PropertyCard from "../components/PropertyCard";
import Collapse from "../components/Collapse";

function Logement() {
  const { id } = useParams();
  const navigate = useNavigate();

  const logement = Appartements.find((appart) => appart.id === id);
  useEffect(() => {
    if (!logement) {
      navigate("*");
    }
  }, [logement, navigate]);

  if (!logement) return null;

  return (
    <div>
      <Slideshow pictures={logement.pictures} />
      <PropertyCard appartement={logement} />
      <div className="collapse-container">
        <Collapse titre="Description" texte={logement.description} />
        <Collapse
          titre="Équipements"
          texte={logement.equipments.map((equipement) => (
            <p>{equipement}</p>
          ))}
        />
      </div>
    </div>
  );
}

export default Logement;
