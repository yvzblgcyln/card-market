import { useState } from "react";
import "./filter.scss";
import { HiArrowUp, HiArrowDown } from "react-icons/hi";

function Filter() {
  const [isCardTypeOpened, setCardTypeOpened] = useState(false);
  const [isPositionOpened, setPositionOpened] = useState(false);
  const [isPriceOpened, setPriceOpened] = useState(false);

  return (
    <div className="filter">
      <div className="tab">
        <div className="tab-title df-row" onClick={() => setCardTypeOpened(!isCardTypeOpened)}>
          <h4>Card Type </h4>
          <div className="icon">{isCardTypeOpened ? <HiArrowUp /> : <HiArrowDown />}</div>
        </div>
        {isCardTypeOpened && (
          <div className="tab-list">
            <li>Gold(1)</li>
            <li>Silver(2)</li>
            <li>Bronze(1)</li>
          </div>
        )}
        <hr />
      </div>
      <div className="tab">
        <div className="tab-title df-row" onClick={() => setPositionOpened(!isPositionOpened)}>
          <h4>Position </h4>
          <div className="icon">{isPositionOpened ? <HiArrowUp /> : <HiArrowDown />}</div>
        </div>
        {isPositionOpened && (
          <div className="tab-list">
            <li>Goalkeper(1)</li>
            <li>Defender(2)</li>
            <li>Midfielder(1)</li>
            <li>Forward(1)</li>
          </div>
        )}
        <hr />
      </div>
      <div className="tab">
        <div className="tab-title df-row" onClick={() => setPriceOpened(!isPriceOpened)}>
          <h4>Price </h4>
          <div className="icon">{isPriceOpened ? <HiArrowUp /> : <HiArrowDown />}</div>
        </div>
        {isPriceOpened && (
          <div className="tab-list">
            <input type="range" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Filter;
