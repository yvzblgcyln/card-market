import { useContext } from "react";
import ModalDataContext from "../../context/ModalDataContext";
import "./cardModal.scss";

function CardModal() {
  const { selectedIndex, cards, setIsModalOpen } = useContext(ModalDataContext);
  let cardFilter = cards.filter(({ id }) => selectedIndex.toString() === id);
  let card = cardFilter[0];

  let cardType = card && card.cardType;
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
              <button>Sell or buy</button>
            </div>
          </div>
          <div className="attributes df-col">
            <h4>ATTRIBUTES</h4>
            <div className="skills df-row">
              <div className="skill-container df-col">
                <div className="skill-title">Pace</div>
                <div className="skill-rating">
                  {card.attributes.pace}
                  <span>/100</span>
                </div>
              </div>
              <div className="skill-container df-col">
                <div className="skill-title">Shooting</div>
                <div className="skill-rating">
                  {card.attributes.shooting}
                  <span>/100</span>
                </div>
              </div>
              <div className="skill-container df-col">
                <div className="skill-title">Passing</div>
                <div className="skill-rating">
                  {card.attributes.passing}
                  <span>/100</span>
                </div>
              </div>
              <div className="skill-container df-col">
                <div className="skill-title">Dribbling</div>
                <div className="skill-rating">
                  {card.attributes.dribbling}
                  <span>/100</span>
                </div>
              </div>
              <div className="skill-container df-col">
                <div className="skill-title">Defending</div>
                <div className="skill-rating">
                  {card.attributes.defending}
                  <span>/100</span>
                </div>
              </div>
              <div className="skill-container df-col">
                <div className="skill-title">Physical</div>
                <div className="skill-rating">
                  {card.attributes.physical}
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
