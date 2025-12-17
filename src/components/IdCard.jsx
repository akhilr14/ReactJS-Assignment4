import "../components/style/IdCard.css";
import genderMale from "../assets/mars-solid-full.svg";
import genderFemale from "../assets/venus-solid-full.svg";
import other from "../assets/genderless-solid-full.svg";
import { useState } from "react";
import Portal from "./Portal";
import Form from "./Form";
import Delete from "./Delete";

export default function IdCard({ employee, refreshEmployees }) {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);

  const fullName = `${employee.firstName} ${employee.lastName}`;
  const genderLabel =
    employee.gender === 0
      ? genderMale
      : employee.gender === 1
      ? genderFemale
      : other;
  const designation =
    employee.designation === 0
      ? "Intern"
      : employee.designation === 1
      ? "Developer"
      : employee.designation === 2
      ? "Manager"
      : employee.designation === 3
      ? "HR"
      : "Other";

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

          <div className="card-body text-center">
            <h5 className="card-title">{fullName}</h5>
            <img
              className="card-img-top"
              src={genderLabel}
              alt="Photo"
              style={{
                width: "30px",
                height: "30px",
                margin: "0px auto 10px auto",
              }}
            />
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
            <h6>
              <strong>Address:</strong> {employee.postalAddress || "N/A"}
            </h6>
            <h6>
              <strong>City:</strong> {employee.city}
            </h6>
            <h6>
              <strong>Country:</strong> {employee.country}
            </h6>
            <h6>
              <strong>DOB:</strong> {employee.dateOfBirth.slice(0, 10)}
            </h6>
            <h6>
              <strong>Designation:</strong> {designation}
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
        <Form
          employee={employee}
          isEdit={true}
          onClose={() => setIsOpenForm(false)}
          refreshEmployees={refreshEmployees}
        />
      </Portal>

      <Portal open={isOpenDelete} onClose={() => setIsOpenDelete(false)}>
        <Delete
          employeeId={employee.employeeID}
          onClose={() => setIsOpenDelete(false)}
          refreshEmployees={refreshEmployees}
        />
      </Portal>
    </div>
  );
}
