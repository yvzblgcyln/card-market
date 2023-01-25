import { useContext, useState } from "react";
import "./filter.scss";
import { HiArrowUp, HiArrowDown } from "react-icons/hi";
import DataContext from "../../context/DataContext";

function Filter({ setFilterType, title }) {
  const { market, myCards } = useContext(DataContext);
  let cards = title.toLowerCase() === "market" ? market : myCards;

  const [isCardTypeOpened, setCardTypeOpened] = useState(false);
  const [isPositionOpened, setPositionOpened] = useState(false);
  const [isPriceOpened, setPriceOpened] = useState(false);

  const handleFilter = (e) => {
    let name = e.target.getAttribute("name");
    setFilterType(name);
  };

  return (
    <div className="filter">
      <div className="tab">
        <div className="tab-title df-row" onClick={() => setCardTypeOpened(!isCardTypeOpened)}>
          <h4>Card Type </h4>
          <div className="icon">{isCardTypeOpened ? <HiArrowUp /> : <HiArrowDown />}</div>
        </div>
        {isCardTypeOpened && (
          <div className="tab-list">
            <li name="Gold" onClick={handleFilter}>
              Gold ({cards.filter((card) => card.cardType.includes("Gold")).length})
            </li>
            <li name="Silver" onClick={handleFilter}>
              Silver ({cards.filter((card) => card.cardType.includes("Silver")).length})
            </li>
            <li name="Bronze" onClick={handleFilter}>
              Bronze ({cards.filter((card) => card.cardType.includes("Bronze")).length})
            </li>
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
            <li name="Goalkeeper" onClick={handleFilter}>
              Goalkeeper ({cards.filter((card) => card.position.includes("Goalkeeper")).length})
            </li>
            <li name="Defender" onClick={handleFilter}>
              Defender ({cards.filter((card) => card.position.includes("Defender")).length})
            </li>
            <li name="Midfielder" onClick={handleFilter}>
              Midfielder ({cards.filter((card) => card.position.includes("Midfielder")).length})
            </li>
            <li name="Forward" onClick={handleFilter}>
              Forward ({cards.filter((card) => card.position.includes("Forward")).length})
            </li>
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
