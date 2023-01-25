import { useContext } from "react";
import FilterDataContext from "../../context/FilterDataContext";
import "./rangeSlider.scss";

function RangeSlider() {
  const { max, min, setMax, setMin } = useContext(FilterDataContext);

  return (
    <div className="range-slider">
      <div className="values">
        <span>&euro; {min}.00</span>
        <span>&euro; {max}.00</span>
      </div>
      <div className="container">
        <div className="progress" style={{ left: `${min * 5}px`, width: `${(max - min) * 5}px` }}></div>
        <input type="range" min="0" max="30" value={min} onChange={(e) => setMin(e.target.value)} />
        <input type="range" min="0" max="30" value={max} onChange={(e) => setMax(e.target.value)} />
      </div>
    </div>
  );
}

export default RangeSlider;
