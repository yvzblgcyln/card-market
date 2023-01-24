import "./slider.scss";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useContext, useState } from "react";
import DataContext from "../../context/DataContext";

function Slider() {
  const { market } = useContext(DataContext);
  const [currentSlide, setCurrentSlide] = useState(0);

  let card1 = market[0].photoUrl;
  let card2 = market[1].photoUrl;
  let card3 = market[2].photoUrl;

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider df-row">
      <div className="left df-col">
        <div className="text">NEW </div>
        <div className="text">BRONZE CARDS </div>
        <div className="arrows df-row">
          <FiArrowLeft onClick={prevSlide} className="arrow" />
          <div className={`circle ${currentSlide === 0 && "active"}`}></div>
          <div className={`circle ${currentSlide === 1 && "active"}`}></div>
          <div className={`circle ${currentSlide === 2 && "active"}`}></div>
          <FiArrowRight onClick={nextSlide} className="arrow" />
        </div>
      </div>
      {card1 && (
        <div className="cards">
          <img
            src={card2}
            alt=""
            className={`img img-${currentSlide === 0 ? 2 : currentSlide - 1}`}
          />
          <img src={card1} alt="" className={`img img-${currentSlide}`} />
          <img src={card3} alt="" className={`img img-${currentSlide + 1}`} />
        </div>
      )}
    </div>
  );
}

export default Slider;
