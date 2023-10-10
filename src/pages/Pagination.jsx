const Pagination = ({ todosPerPage, totalTodos, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div className="user__pagination">
      <ul className="user__pages">
        {pageNumbers.map((number) => (
          <a onClick={() => paginate(number)} className="user__page" href="#">
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
