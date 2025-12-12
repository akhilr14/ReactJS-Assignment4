import CardWrapper from "./CardWrapper";
import IdCard from "./IdCard";

export default function CardList({ idData }) {
  return (
    <div className="id-list-container">
      {idData.map((id, index) => {
        return (
          <div className="test" key={index}>
            {id}
          </div>
        );
      })}
    </div>
  );
}
