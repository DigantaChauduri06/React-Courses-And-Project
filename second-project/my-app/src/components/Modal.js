import ReactDom from "react-dom";
import "../css/Modal.css";
export default function Modal({
  children,
  handleCloseModal,
  handleShowModalView,
}) {
  return ReactDom.createPortal(
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <br />
        <button onClick={(handleCloseModal, handleShowModalView)}>Close</button>
      </div>
    </div>,
    document.body
  );
}
