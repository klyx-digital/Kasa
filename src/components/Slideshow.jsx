import React, { useState } from "react";
import Back from "../assets/icons/Back.svg";
import Next from "../assets/icons/Next.svg";

const Slideshow = ({ pictures }) => {
  const [index, setIndex] = useState(0);

  const slideNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const slideBack = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <figure className="Slideshow">
        {pictures.length > 1 && (
          <img src={Back} alt="Back" onClick={slideBack} className="back" />
        )}
        <img src={pictures[index]} className="slideImage" />
        {pictures.length > 1 && (
          <img src={Next} alt="Next" onClick={slideNext} className="next" />
        )}
      </figure>
    </div>
  );
};

export default Slideshow;
