import "../../index.css";
import cardData from "../../MockData/CardData.json";
export const CardData = () => {
  return (
    <div className="container">
      <h1>CardData UI</h1>
      {cardData.map((value, index) => {
        return (
          <div className="card mx-auto mb-3" key={index}>
            <div className="card-body">
              <h6 className="card-title text-secondary">{value.title}</h6>
              <h3 className="card-title text-dark fw-bold">{value.score}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};
