import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { usersApi } from "../api";
import Modal from "./modal/Modal";
import ModalOverlay from "./modal/ModalOverlay";
import Pagination from "./Pagination";

const User = () => {
  const [user, setUser] = useState();
  const [todos, setTodos] = useState([]);
  const [remoteTodoId, setRemoteTodoId] = useState();
  const { id } = useParams();
  const [modal, setModal] = useState(false);

  const modalData = { modal, setModal };
  const todosData = { todos, setTodos, remoteTodoId, setRemoteTodoId };

  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(5);

  const lastTodoIndex = currentPage * todosPerPage;
  const firstTodoIndex = lastTodoIndex - todosPerPage;
  const currentTodos = todos.slice(firstTodoIndex, lastTodoIndex);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const showModal = (todoId) => (e) => {
    setRemoteTodoId(todoId)
    setModal(true);
  };


  const toggleCheck = (currentTodo, todoIndex) => (e) => {
    const updatedTodos = [...todos];
    updatedTodos[todoIndex].completed = currentTodo.completed ? false : true;

    setTodos(updatedTodos);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${usersApi}/${id}`);
        setUser(await response.json());
      } catch (error) {
        console.log(error);
      }
    };
    const fetchTodos = async () => {
      try {
        const response = await fetch(`${usersApi}/${id}/todos`);
        setTodos(await response.json());
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
    fetchTodos();
  }, [id]);
  if (!user) {
    return <h2>No data</h2>;
  }

  return (
    <>
      <div className="user">
        <div className="container user__inner">
          <div className="user__header">
            <h2 className="user__header-title">{user.name}</h2>
            <p className="user__header-subtitle">Username: {user.username}</p>
            <p className="user__email">Email: {user.email}</p>
            <p className="user__phone">Phone number: {user.phone}</p>
          </div>
          <div className="user__todos">
            <h3 className="user__todos-title">TODOS</h3>
            {todos && (
              <ul className="user__todos-list">
                {currentTodos.map((todo, i) => (
                  <div className="user__todos-item">
                    <li>
                        <input onChange={toggleCheck(todo, i)} className="user__todos-checkbox" type="checkbox" checked={todo.completed} />
                        {todo.title}
                    </li>
                    <button
                      onClick={showModal(todo.id)}
                      className="user__todos-button"
                    >
                      remove
                    </button>
                  </div>
                ))}
              </ul>
            )} 
          </div>
          {todos && <Pagination  todosPerPage={todosPerPage} totalTodos={todos.length} paginate={paginate} />}
          <Link className="user__button-back" to="/">
            Back
          </Link>
        </div>
      </div>
      {modal && <Modal todosData={todosData} modalData={modalData} />}
      {modal && <ModalOverlay modalData={modalData} />}
    </>
  );
};

export default User;
