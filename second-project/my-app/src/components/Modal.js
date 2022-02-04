import ReactDom from "react-dom";
import "../css/Modal.css";
import NewEventForm from "./NewEventForm";
export default function Modal({
  children,
  handleCloseModal,
  handleShowModalView,
  isModal,
  upper,
}) {
  return ReactDom.createPortal(
    <div className="modal-backdrop">
      <div
        className="modal"
        style={{
          border: "5px solid #ff4500",
          backgroundColor: isModal ? "#1f1f1f" : "#D45757C9",
        }}
      >
        {children}
        <br />
        {
          <div className="btn-close">
            <button onClick={(handleCloseModal, handleShowModalView)}>
              Close
            </button>
          </div>
        }
      </div>
    </div>,
    document.body
  );
}
