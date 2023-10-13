import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { usersApi } from "../../api/users";
import Modal from "../common-components/modal/Modal";
import ModalOverlay from "../common-components/modal/ModalOverlay";
import Pagination from "./components/Pagination";
import Header from "./components/Header";
import Todos from "./components/Todos";
import routes from "../../routes";
import Loader from "../common-components/loader/Loader";
import { ITodo, IUser } from "../../models";

const User = () => {
  const [user, setUser] = useState<IUser>();
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [remoteTodoId, setRemoteTodoId] = useState<number>();
  const { id } = useParams();
  const [modal, setModal] = useState<boolean>(false);

  const modalData = { modal, setModal };
  const todosData = { todos, setTodos, remoteTodoId, setRemoteTodoId };

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [todosPerPage] = useState<number>(5);

  const lastTodoIndex: number = currentPage * todosPerPage;
  const firstTodoIndex: number = lastTodoIndex - todosPerPage;
  const currentTodos: ITodo[] = todos.slice(firstTodoIndex, lastTodoIndex);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const showModal = (todoId: number) => () => {
    setRemoteTodoId(todoId);
    setModal(true);
  };

  const toggleCheck = (currentTodo: ITodo, todoIndex: number) => () => {
    const getCurrentTodoIndex = (i: number) => {
      if (currentPage === 1) {
        return i;
      } else {
        const currentTodosLastIndex = todosPerPage * currentPage - 1;
        const currentTodoFirstIndex =
          todosPerPage * currentPage - (todosPerPage - 1);

        if (i === 0) {
          return currentTodosLastIndex - (todosPerPage - 1);
        } else {
          return currentTodoFirstIndex + i - 1;
        }
      }
    };

    const currentTodoIndex = getCurrentTodoIndex(todoIndex);

    const updatedTodos = [...todos];

    updatedTodos[currentTodoIndex].completed = currentTodo.completed
      ? false
      : true;

    setTodos(updatedTodos);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${usersApi}/${id}`);
        setUser(await response.json());
        console.log(user);
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
    return <Loader />;
  }

  return (
    <>
      <div className="user">
        <div className="container user__inner">
          <Header user={user} />
          <Todos
            currentTodos={currentTodos}
            toggleCheck={toggleCheck}
            showModal={showModal}
          />
          <Pagination
            todosPerPage={todosPerPage}
            totalTodos={todos.length}
            paginate={paginate}
          />
          <Link className="user__button-back" to={routes.rootPagePath()}>
            Back
          </Link>
        </div>
      </div>
      <Modal todosData={todosData} modalData={modalData} />
      <ModalOverlay modalData={modalData} />
    </>
  );
};

export default User;
