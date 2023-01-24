import "./cardList.scss";
import Filter from "../filters/Filter";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";

function CardList({ title, cards }) {
  return (
    <div className="card-list" id={title.toLowerCase() === "market" ? "market" : "myCards"}>
      <h4>{title}</h4>
      <div className="container df-row">
        <Filter />
        <div className="cards df-row">
          {cards.map((card, index) => (
            <div className="card-container" key={index}>
              <Card
                imgUrl={card.photoUrl}
                title={title}
                price={card.cardType === "Bronze" ? 10 : card.cardType === "Silver" ? 20 : 30}
              />
            </div>
          ))}
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default CardList;
