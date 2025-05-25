import { useState } from "react";
import "./slider.scss";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlides = (direction) => {
    const total = images.length;
    if (direction === "left") {
      setImageIndex((imageIndex - 1 + total) % total);
    } else {
      setImageIndex((imageIndex + 1) % total);
    }
  };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow">
            <img src="/arrow.png" alt="" onClick={() => changeSlides("left")} />
          </div>
          <div className="imageContainer">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow">
            <img
              src="/arrow.png"
              alt=""
              onClick={() => changeSlides("right")}
              className="right"
            />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImage">
        <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt=""
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
