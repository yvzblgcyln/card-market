import "./app.css";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Slider from "./components/slider/Slider";
import CardList from "./components/cardList/CardList";
import { useContext } from "react";
import DataContext from "./context/DataContext";

function App() {
  const { market, myCards, getData } = useContext(DataContext);

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
          <CardList title="MY CARDS" cards={myCards} />
          <CardList title="MARKET" cards={market} />
        </div>
      )}
    </div>
  );
}

export default App;
