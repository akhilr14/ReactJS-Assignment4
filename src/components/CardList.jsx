import IdCard from "./IdCard";
import "./style/CardList.css";
export default function CardList({ idData }) {
  return (
    <div className="idlist-container">
      {idData.map((id, index) => {
        return (
          <div key={id}>
            <IdCard />
          </div>
        );
      })}
    </div>
  );
}
