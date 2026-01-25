const Modal = ({ id, children, width }) => {
  return (
    <dialog id={id} className="modal">
      <div className={`modal-box ${width && width}`}>{children}</div>
    </dialog>
  );
};

export default Modal;
