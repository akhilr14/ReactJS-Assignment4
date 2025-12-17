import IdCard from "./IdCard";
import "./style/CardList.css";

export default function CardList({ idData, refreshEmployees }) {
  return (
    <div className="idlist-container">
      {idData.map((employee) => (
        <IdCard
          key={employee.employeeID}
          employee={employee}
          refreshEmployees={refreshEmployees}
        />
      ))}
    </div>
  );
}
