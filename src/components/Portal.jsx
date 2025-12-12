import ReactDom from "react-dom";
import "../components/style/Portal.css";

export default function Portal({ open, children, onClose }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="Overlay" />
      <div className="Portal">
        <button className="close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
