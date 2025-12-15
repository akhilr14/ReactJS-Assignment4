import "../components/style/IdCard.css";
import Photo from "../assets/Picture1.png";
import { useState } from "react";
import Portal from "./Portal";
import Form from "./Form";
import Delete from "./Delete";

export default function IdCard() {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        {/* Front Side */}
        <div className="flip-card-front card">
          <img
            className="card-img-top"
            src={Photo}
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
            <h5 className="card-title">Name</h5>
            <h6>AGE | GEN</h6>
            <h6>
              <strong>Phone:</strong> 93740
            </h6>
            <h6>
              <strong>Email:</strong> era@ag
            </h6>
          </div>
        </div>

        {/* Back Side */}
        <div className="flip-card-back card">
          <div className="card-body text-center">
            <h5 className="card-title">Name</h5>
            <h6>AGE | GEN</h6>
            <h6>
              <strong>Phone:</strong> 93740
            </h6>
            <h6>
              <strong>Email:</strong> era@ag
            </h6>
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
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
      <div>
        <Portal open={isOpenForm} onClose={() => setIsOpenForm(false)}>
          <Form />
        </Portal>
        <Portal open={isOpenDelete} onClose={() => setIsOpenDelete(false)}>
          <Delete />
        </Portal>
      </div>
    </div>
  );
}
