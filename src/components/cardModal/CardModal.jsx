import { useEffect, useState } from "react";
import { useContext } from "react";
import ModalDataContext from "../../context/ModalDataContext";
import TradeModalContext from "../../context/TradeModalContext";
import "./cardModal.scss";
import axios from "axios";

function CardModal() {
  const { selectedIndex, setIsModalOpen, isMarket } = useContext(ModalDataContext);
  const { setTrade } = useContext(TradeModalContext);

  const [card, setCard] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios(`http://challenge.vole.io/cards/${selectedIndex}`);
        setCard(data);
        console.log(card);
      } catch (error) {
        console.log("error", error);
      }
    };
    getData();
  }, []);

  const isGoalkeeper = card && card.position === "Goalkeeper" ? true : false;
  const cardType = card && card.cardType;

  return (
    <div className="cardModal">
      {card && (
        <div className="container df-col">
          <div className="close" onClick={() => setIsModalOpen(false)}>
            x
          </div>
          <div
            className="img-area"
            style={{
              background:
                (cardType === "Bronze" && "linear-gradient(#9C6D3E, #E8C8A9)") ||
                (cardType === "Silver" && "linear-gradient(#808080, #DFDFDF)"),
            }}
          >
            <img src={card.photoUrl} alt="" />
          </div>
          <div className="name-area df-row">
            <div className="df-col">
              <div className="name">{card.name}</div>
              <div className="position">{card.position}</div>
            </div>
            <div className="price-area df-row">
              <div className="price">&euro; {card.price}.00</div>
              {isMarket ? (
                <button onClick={() => setTrade("buy")}>Buy</button>
              ) : (
                <button onClick={() => setTrade("sell")}>Sell</button>
              )}
            </div>
          </div>
          <div className="attributes df-col">
            <h4>ATTRIBUTES</h4>
            <div className="skills df-row">
              <div className="skill-container df-col">
                <div className="skill-title">{!isGoalkeeper ? "Pace" : "Diving"}</div>
                <div className="skill-rating">
                  {!isGoalkeeper ? card.attributes.pace : card.attributes.diving}
                  <span>/100</span>
                </div>
              </div>
              <div className="skill-container df-col">
                <div className="skill-title">{!isGoalkeeper ? "Shooting" : "Handling"}</div>
                <div className="skill-rating">
                  {!isGoalkeeper ? card.attributes.shooting : card.attributes.handling}
                  <span>/100</span>
                </div>
              </div>
              <div className="skill-container df-col">
                <div className="skill-title">{!isGoalkeeper ? "Passing" : "Kicking"}</div>
                <div className="skill-rating">
                  {!isGoalkeeper ? card.attributes.passing : card.attributes.kicking}
                  <span>/100</span>
                </div>
              </div>
              <div className="skill-container df-col">
                <div className="skill-title">{!isGoalkeeper ? "Dribbling" : "Reflexes"}</div>
                <div className="skill-rating">
                  {!isGoalkeeper ? card.attributes.dribbling : card.attributes.reflexes}
                  <span>/100</span>
                </div>
              </div>
              <div className="skill-container df-col">
                <div className="skill-title">{!isGoalkeeper ? "Defending" : "Speed"}</div>
                <div className="skill-rating">
                  {!isGoalkeeper ? card.attributes.defending : card.attributes.speed}
                  <span>/100</span>
                </div>
              </div>
              <div className="skill-container df-col">
                <div className="skill-title">{!isGoalkeeper ? "Physical" : "Positioning"}</div>
                <div className="skill-rating">
                  {!isGoalkeeper ? card.attributes.physical : card.attributes.positioning}
                  <span>/100</span>
                </div>
              </div>
            </div>
          </div>
          <div className="team-area df-row">
            <div className="left">
              <div className="team-title">Team</div>
              <div className="team">{card.team}</div>
            </div>
            <div className="right">
              <div className="team-title">Card Type</div>
              <div className="team">{card.cardType}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardModal;
