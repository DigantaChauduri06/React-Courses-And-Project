import ReactDom from "react-dom";
import "../css/Modal.css";
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
          backgroundColor: isModal ? "#f1f1" : "#D45757C9",
        }}
      >
        {children}
        <br />
        <button onClick={(handleCloseModal, handleShowModalView)}>Close</button>
        {
          <p className={upper ? "sales" : "not-sales"}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error illo
            praesentium ducimus ad assumenda quae, cumque hic magni deserunt
            voluptas enim sed dolores facilis aliquam modi. Fugit veniam nihil
            vitae!
          </p>
        }
      </div>
    </div>,
    document.body
  );
}
