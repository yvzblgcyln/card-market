import { useContext } from "react";
import DataContext from "../../context/DataContext";
import ModalDataContext from "../../context/ModalDataContext";
import "./card.scss";

function Card({ imgUrl, title, price, id }) {
  const { market, myCards, setWallet, setMyCards, wallet } = useContext(DataContext);
  const { setIsModalOpen, setSelectedIndex, selectedIndex, setCards, setIsMarket } = useContext(ModalDataContext);
  let isMarket = title.toLowerCase() === "market" ? true : false;
  const handleClick = () => {
    setIsModalOpen(true);
    setSelectedIndex(id);
    setCards(isMarket ? market : myCards);
    setIsMarket(isMarket ? true : false);
  };

  const handleSell = () => {};
  const handleBuy = () => {
    setWallet(wallet - price);
    let cardFilter = market.filter(({ id }) => selectedIndex.toString() === id);
    let card = cardFilter[0];
    setMyCards([...myCards, card]);
    console.log(selectedIndex, card, id);
  };
  return (
    <div className="card df-col">
      <img src={imgUrl} alt="" onClick={handleClick} />
      <div className="sub-text df-row">
        <div className="price">&euro; {price}.00</div>
        {isMarket ? <button onClick={handleBuy}>Buy</button> : <button onClick={handleSell}>Sell</button>}
      </div>
    </div>
  );
}

export default Card;
