const ModalOverlay = ({ modalData }) => {
    const { modal } = modalData;
  
    const modalIsActive = modal;
    const modalClassName = modalIsActive
      ? "modal-overlay--active"
      : "modal-overlay--disabled";
  
    return <div className={`modal-overlay ${modalClassName}`}></div>;
  };
  
  export default ModalOverlay;