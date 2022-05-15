import style from "./index.module.scss";

const Pagination = ({ currentPage, setCurrentPage, totalResults }) => {
  let buttons;

  const getButtons = () => {
    const remains = totalResults % 10 === 0 ? 1 : 2;
    const count = Math.trunc(totalResults / 10) + remains;
    return (buttons = Array.from(Array(count).keys()).splice(1));
  };

  getButtons();

  return (
    <div className={style.PaginationContainer}>
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        className={currentPage === 1 ? style.disabled : ""}
      >
        {"<"}
      </button>
      {buttons.map(item => (
        <button
          key={item}
          onClick={() => setCurrentPage(item)}
          className={item === currentPage ? style.active : ""}
        >
          {item}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        className={
          currentPage === buttons[buttons.length - 1] ? style.disabled : ""
        }
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
