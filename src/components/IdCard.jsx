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
    // <div className="IdCard-Container">
    //   <div className="IdCard-Photo">
    //     <img src={Photo} alt="Photo" />
    //   </div>
    //   <div className="IdCard-Details">
    //     <p>NAME</p>
    //   </div>
    // </div>

    // <div className="card">
    //   <img
    //     className="card-img-top"
    //     src={Photo}
    //     alt="Card image cap"
    //     style={{
    //       width: "150px",
    //       height: "150px",
    //       objectFit: "cover",
    //       margin: "0 auto",
    //     }}
    //   />
    //   <div className="card-body">
    //     <h5 className="card-title">NAME</h5>
    //     <h6>AGE GENDER</h6>
    //     <h6>Phone Num</h6>
    //     <h6>Email</h6>
    //     <div>
    //       <button
    //         type="button"
    //         class="btn btn-outline-danger"
    //         style={{ margin: "0px 30px 0px 0px" }}
    //       >
    //         Delete
    //       </button>
    //       <button type="button" class="btn btn-primary">
    //         Edit
    //       </button>
    //     </div>
    //   </div>
    // </div>
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
