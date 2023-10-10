const Modal = ({ todosData, modalData }) => {
  console.log(todosData);
  const { todos, setTodos, remoteTodoId } = todosData;
  const { modal, setModal } = modalData;

  const modalIsActive = modal;
  const modalClassName = modalIsActive ? "modal--active" : "modal--disabled";

  const hideModal = () => {
    setModal(false);
  };

  const removeTodo = (remoteId) => (e) => {
    
    const newTodos = todos.filter(({ id }) => id !== remoteId);
    setTodos(newTodos);
    hideModal();
  };

  return (
    <div className={`modal ${modalClassName}`}>
      <h3 className="modal__title">Are you sure?</h3>
      <button onClick={removeTodo(remoteTodoId)} className="modal__button-accept">Accept</button>
      <button onClick={hideModal} className="modal__button-decline">
        Decline
      </button>
    </div>
  );
};

export default Modal;