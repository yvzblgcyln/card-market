import "./cardList.scss";
import Filter from "../filters/Filter";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import { useContext, useEffect, useState } from "react";
import DataContext from "../../context/DataContext";

function CardList({ title }) {
  const { market, myCards } = useContext(DataContext);
  let isTitleMarket = title.toLowerCase() === "market" ? true : false;
  let cards = isTitleMarket ? market : myCards;

  const [filterType, setFilterType] = useState();
  //let filteredMarket = cards;
  let filteredMyCards = cards;

  const [filteredMarket, setfilteredMarket] = useState(cards);

  useEffect(() => {
    if (isTitleMarket) {
      setfilteredMarket(
        cards.filter(({ cardType, position }) => {
          return filterType ? cardType.includes(filterType) || position.includes(filterType) : true;
        })
      );
    } else {
      filteredMyCards = cards.filter(({ cardType, position }) => {
        return filterType ? cardType.includes(filterType) || position.includes(filterType) : true;
      });
    }
  }, [filterType]);
  const [pagedMarket, setPagedMarket] = useState(filteredMarket.slice(0, 10));
  const [pagedMyCards, setPagedMyCards] = useState(filteredMarket.slice(0, 10));

  console.log(pagedMarket);
  return (
    <div className="card-list" id={title.toLowerCase() === "market" ? "market" : "myCards"}>
      <h4>{title}</h4>
      <div className="container df-row">
        <Filter setFilterType={setFilterType} title={title} />
        <div className="right">
          <div className="cards df-row">
            {isTitleMarket &&
              pagedMarket.map((card, index) => (
                <div className="card-container" key={index}>
                  <Card imgUrl={card.photoUrl} title={title} price={card.price} />
                </div>
              ))}
            {!isTitleMarket &&
              pagedMyCards.map((card, index) => (
                <div className="card-container" key={index}>
                  <Card imgUrl={card.photoUrl} title={title} price={card.price} />
                </div>
              ))}
          </div>
          <Pagination
            filtered={isTitleMarket ? filteredMarket : filteredMyCards}
            setPageFilter={isTitleMarket ? setPagedMarket : setPagedMyCards}
          />
        </div>
      </div>
    </div>
  );
}

export default CardList;
