import IdCard from "./IdCard";
import "./style/CardList.css";

export default function CardList({ idData }) {
  return (
    <div className="idlist-container">
      {idData.map((employee) => (
        <IdCard key={employee.employeeID} employee={employee} />
      ))}
    </div>
  );
}
