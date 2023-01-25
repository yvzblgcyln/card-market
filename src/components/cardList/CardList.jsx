import "./cardList.scss";
import Filter from "../filters/Filter";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import { useContext, useEffect, useState } from "react";
import DataContext from "../../context/DataContext";
import FilterDataContext from "../../context/FilterDataContext";

function CardList({ title }) {
  const { market, myCards } = useContext(DataContext);
  const { max, min } = useContext(FilterDataContext);
  let isTitleMarket = title.toLowerCase() === "market" ? true : false;
  let cards = isTitleMarket ? market : myCards;

  const [filterType, setFilterType] = useState();
  const [filteredMarket, setFilteredMarket] = useState(market);
  const [filteredMyCards, setFilteredMyCards] = useState(myCards);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    setActivePage(0);

    let filter = cards.filter(({ cardType, position }) => {
      return filterType ? cardType.includes(filterType) || position.includes(filterType) : true;
    });

    if (isTitleMarket) {
      setFilteredMarket(
        filter.filter(({ price }) => {
          return price <= max && price >= min;
        })
      );
    } else {
      setFilteredMyCards(
        filter.filter(({ price }) => {
          return price <= max && price >= min;
        })
      );
    }
  }, [filterType, max, min]);

  return (
    <div className="card-list" id={title.toLowerCase() === "market" ? "market" : "myCards"}>
      <h4>{title}</h4>
      <div className="container df-row">
        <Filter setFilterType={setFilterType} title={title} filterType={filterType} />
        <div className="right">
          <div className="cards df-row">
            {isTitleMarket &&
              filteredMarket.slice(activePage * 10, activePage * 10 + 10).map((card, index) => (
                <div className="card-container" key={index}>
                  <Card id={card.id} imgUrl={card.photoUrl} title={title} price={card.price} />
                </div>
              ))}
            {!isTitleMarket &&
              filteredMyCards.slice(activePage * 10, activePage * 10 + 10).map((card, index) => (
                <div className="card-container" key={index}>
                  <Card id={card.id} imgUrl={card.photoUrl} title={title} price={card.price} />
                </div>
              ))}
          </div>
          <Pagination
            setActivePage={setActivePage}
            activePage={activePage}
            filtered={isTitleMarket ? filteredMarket : filteredMyCards}
          />
        </div>
      </div>
    </div>
  );
}

export default CardList;
