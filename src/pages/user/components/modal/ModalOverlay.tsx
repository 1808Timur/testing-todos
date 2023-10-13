import React from "react";
import "./styles.css";

const ModalOverlay = ({
  modalData,
}: {
  modalData: { modal: boolean; setModal: Function };
}) => {
  const { modal } = modalData;

  const modalIsActive = modal;
  const modalClassName = modalIsActive
    ? "modal-overlay--active"
    : "modal-overlay--disabled";

  return <div className={`modal-overlay ${modalClassName}`}></div>;
};

export default ModalOverlay;
