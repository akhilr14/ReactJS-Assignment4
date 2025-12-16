import "../components/style/IdCard.css";
import Photo from "../assets/Picture1.png";
import { useState } from "react";
import Portal from "./Portal";
import Form from "./Form";
import Delete from "./Delete";

export default function IdCard({ employee }) {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);

  const fullName = `${employee.firstName} ${employee.lastName}`;
  const genderLabel =
    employee.gender === 0 ? "Male" : employee.gender === 1 ? "Female" : "Other";

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front card">
          <img
            className="card-img-top"
            src={employee.notes || null}
            alt="Photo"
            style={{
              width: "100px",
              height: "120px",
              objectFit: "cover",
              margin: "10px auto 0px auto",
              borderRadius: "20%",
              border: "2px solid #ccc",
            }}
          />

          <div
            className="card-body text-center"
            style={{ padding: "5px 10px" }}
          >
            <h5 className="card-title">{fullName}</h5>
            <h6>{genderLabel}</h6>
            <h6>
              <strong>Phone:</strong> {employee.mobileNumber || "N/A"}
            </h6>
            <h6>
              <strong>Email:</strong> {employee.personalEmail}
            </h6>
          </div>
        </div>

        <div className="flip-card-back card">
          <div className="card-body text-center">
            <h5 className="card-title">{fullName}</h5>
            <h6>{genderLabel}</h6>
            <h6>
              <strong>Phone:</strong> {employee.mobileNumber || "N/A"}
            </h6>
            <h6>
              <strong>Email:</strong> {employee.personalEmail}
            </h6>

            <button
              type="button"
              className="btn btn-outline-danger btn-sm mr-2"
              onClick={() => setIsOpenDelete(true)}
            >
              Delete
            </button>

            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => setIsOpenForm(true)}
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      {/* ---------- MODALS ---------- */}
      <Portal open={isOpenForm} onClose={() => setIsOpenForm(false)}>
        <Form employee={employee} isEdit />
      </Portal>

      <Portal open={isOpenDelete} onClose={() => setIsOpenDelete(false)}>
        <Delete employeeID={employee.employeeID} />
      </Portal>
    </div>
  );
}
