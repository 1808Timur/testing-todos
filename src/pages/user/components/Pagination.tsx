import React from "react";

const Pagination = ({
  todosPerPage,
  totalTodos,
  paginate,
}: {
  todosPerPage: number;
  totalTodos: number;
  paginate: Function;
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div className="user__pagination">
      <ul className="user__pages">
        {pageNumbers.map((number) => (
          <a
            onClick={() => paginate(number)}
            className="user__page"
            href="#"
            key={number}
          >
            <li className="user__pag" key={number}>
              {number}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
