import { useContext, useState } from "react";
import DataContext from "../../context/DataContext";
import ModalDataContext from "../../context/ModalDataContext";
import TradeModalContext from "../../context/TradeModalContext";
import "./tradeModal.scss";

function TradeModal() {
  const [warning, setWarning] = useState(false);
  const [duplicated, setDuplicated] = useState(false);
  const { tradeType, setIsTradeOpen } = useContext(TradeModalContext);
  const { selectedIndex } = useContext(ModalDataContext);
  const { market, wallet, setWallet, setMyCards, myCards } = useContext(DataContext);

  const card =
    market.filter(({ id }) => id === selectedIndex)[0] || myCards.filter(({ id }) => id === selectedIndex)[0];
  const price = card.price;

  const handleSell = () => {
    setWallet(wallet + price);
    setIsTradeOpen(false);
    setMyCards(myCards.filter(({ id }) => id !== selectedIndex));
  };

  const handleBuy = () => {
    let dup = myCards.filter(({ id }) => id === selectedIndex);
    if (dup.length !== 0) {
      setDuplicated(true);
    } else if (wallet - price >= 0) {
      setWallet(wallet - price);
      setMyCards((prev) => [...prev, card]);
      setIsTradeOpen(false);
    } else {
      setWarning(true);
    }
  };

  return (
    <div className="trade-modal">
      {!warning && !duplicated && (
        <div className="container df-col">
          <div className="text">
            Would you like to <span>{tradeType === "sell" ? "sell" : "buy"} </span> card for
          </div>
          <div className="price">&euro; {price}.00</div>
          {tradeType === "sell" ? <button onClick={handleSell}>Sell</button> : <button onClick={handleBuy}>Buy</button>}
          <div className="cancel" onClick={() => setIsTradeOpen(false)}>
            Cancel
          </div>
        </div>
      )}
      {warning && (
        <div className="container warning df-col">
          <div className="text">You don't have enough money</div>
          <button onClick={() => setIsTradeOpen(false)}>Back</button>
        </div>
      )}
      {duplicated && (
        <div className="container warning df-col">
          <div className="text">You already have this card</div>
          <button onClick={() => setIsTradeOpen(false)}>Back</button>
        </div>
      )}
    </div>
  );
}

export default TradeModal;
