import "./index.css";
import { cardData } from "./MockData/data";
export const CardData = () => {
  return (
    <div className="container">
      <h1>CardData UI</h1>
      {cardData.map((value, index) => {
        return (
          <div
            className="card mx-auto mb-3"
            style={{
              width: "13rem",
              backgroundColor: "rgb(223, 226, 226)",
              border: "none",
            }}
            key={index}
          >
            <div className="card-body">
              <h6 className="card-title text-secondary">{value.title}</h6>
              <h3
                className="card-title text-dark"
                style={{ fontWeight: "bold" }}
              >
                {value.score}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};
