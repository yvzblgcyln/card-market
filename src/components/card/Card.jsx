import { useContext } from "react";
import DataContext from "../../context/DataContext";
import ModalDataContext from "../../context/ModalDataContext";
import "./card.scss";

function Card({ imgUrl, title, price, id }) {
  const { market, myCards } = useContext(DataContext);
  const { setIsModalOpen, setSelectedIndex, setCards } = useContext(ModalDataContext);

  const handleClick = () => {
    setIsModalOpen(true);
    setSelectedIndex(id);
    setCards(title.toLowerCase() === "market" ? market : myCards);
  };
  return (
    <div className="card df-col">
      <img src={imgUrl} alt="" onClick={handleClick} />
      <div className="sub-text df-row">
        <div className="price">&euro; {price}.00</div>
        {title.toLowerCase() === "market" ? <button>Buy</button> : <button>Sell</button>}
      </div>
    </div>
  );
}

export default Card;
