import React from "react";
import Banniere from "../components/Banniere";
import Card from "../components/Card";
import Appartements from "../../public/datas";
import PaysageBannierre from "../assets/images/Banniere.png";

function Home() {
  return (
    <div>
      <Banniere
        src={PaysageBannierre}
        titre="Chez vous, partout et ailleurs"
        className="homeBanniere"
      />
      <Card appartements={Appartements} />
    </div>
  );
}

export default Home;
