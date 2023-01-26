import "./app.css";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Slider from "./components/slider/Slider";
import CardList from "./components/cardList/CardList";
import { useContext } from "react";
import DataContext from "./context/DataContext";
import CardModal from "./components/cardModal/CardModal";
import ModalDataContext from "./context/ModalDataContext";
import TradeModal from "./components/tradeModal/TradeModal";
import TradeModalContext from "./context/TradeModalContext";

function App() {
  const { getData } = useContext(DataContext);
  const { isModalOpen } = useContext(ModalDataContext);
  const { isTradeOpen } = useContext(TradeModalContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData().finally(() => setLoading(false));
  }, []);

  return (
    <div className="app-cont">
      {!loading && (
        <div className="app df-col">
          <Navbar />
          <Slider />
          <CardList title="MY CARDS" />
          <CardList title="MARKET" />
          {isModalOpen && <CardModal />}
          {isTradeOpen && <TradeModal />}
        </div>
      )}
    </div>
  );
}

export default App;
