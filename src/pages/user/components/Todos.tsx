import React from "react";
import { ITodo } from "../../../models";

const Todos = ({
  currentTodos,
  toggleCheck,
  showModal,
}: {
  currentTodos: ITodo[];
  toggleCheck: Function;
  showModal: Function;
}) => (
  <div className="user__todos">
    <h3 className="user__todos-title">TODOS</h3>
    <ul className="user__todos-list">
      {currentTodos.map((todo, i) => (
        <div className={`user__todos-item ${todo.completed ? 'user__todos-item--active' : 'user__todos-item--disabled'}`} key={todo.id}>
          <li>
            <input
              onChange={toggleCheck(todo, i)}
              className="user__todos-checkbox"
              type="checkbox"
              checked={todo.completed}
            />
            {todo.title}
          </li>
          <button onClick={showModal(todo.id)} className="user__todos-button">
            remove
          </button>
        </div>
      ))}
    </ul>
  </div>
);

export default Todos;
