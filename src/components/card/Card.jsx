import { useContext } from "react";
import DataContext from "../../context/DataContext";
import ModalDataContext from "../../context/ModalDataContext";
import TradeModalContext from "../../context/TradeModalContext";
import "./card.scss";

function Card({ imgUrl, title, price, id }) {
  const { market, myCards } = useContext(DataContext);
  const { setIsModalOpen, setSelectedIndex, setCards, setIsMarket } = useContext(ModalDataContext);
  const { setTrade } = useContext(TradeModalContext);
  const isMarket = title.toLowerCase() === "market" ? true : false;

  const handleClick = () => {
    setIsModalOpen(true);
    setSelectedIndex(id);
    setCards(isMarket ? market : myCards);
    setIsMarket(isMarket ? true : false);
  };

  const handleSetBuy = () => {
    setSelectedIndex(id);
    setTrade("buy");
  };

  const handleSetSell = () => {
    setTrade("sell");
    setSelectedIndex(id);
  };
  return (
    <div className="card df-col">
      <img src={imgUrl} alt="" onClick={handleClick} />
      <div className="sub-text df-row">
        <div className="price">&euro; {price}.00</div>
        {isMarket ? <button onClick={handleSetBuy}>Buy</button> : <button onClick={handleSetSell}>Sell</button>}
      </div>
    </div>
  );
}

export default Card;
