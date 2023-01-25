import "./card.scss";
function Card({ imgUrl, title, price }) {
  return (
    <div className="card df-col">
      <img src={imgUrl} alt="" />
      <div className="sub-text df-row">
        <div className="price">&euro; {price}.00</div>
        {title.toLowerCase() === "market" ? <button>Buy</button> : <button>Sell</button>}
      </div>
    </div>
  );
}

export default Card;
