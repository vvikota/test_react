import style from "./index.module.scss";

const Pagination = props => {
  const {
    currentPage,
    setCurrentPage,
    totalResults,
    currentPaginationPortion,
    setPaginationPortion,
  } = props;

  let buttons;
  let lastPaginationPortion;

  const getButtons = () => {
    const remains = totalResults % 10 === 0 ? 1 : 2;
    const count = Math.trunc(totalResults / 10) + remains;
    buttons = Array.from(Array(count).keys()).splice(1);
  };

  getButtons();

  const paginationPortion = buttons.slice(
    currentPaginationPortion * 10 - 10,
    currentPaginationPortion * 10
  );

  const getLastPaginationPortion = () => {
    const remains = totalResults % 100 === 0 ? 0 : 1;
    lastPaginationPortion = Math.trunc(totalResults / 100) + remains;
  };

  getLastPaginationPortion();

  const getPrevPagePortion = () => {
    setPaginationPortion(currentPaginationPortion - 1);
    setCurrentPage((currentPaginationPortion - 1) * 10 - 9);
  };

  const getNextPagePortion = () => {
    setPaginationPortion(currentPaginationPortion + 1);
    setCurrentPage((currentPaginationPortion + 1) * 10 - 9);
  };

  return (
    <div className={style.PaginationContainer}>
      <button
        onClick={getPrevPagePortion}
        className={currentPaginationPortion === 1 ? style.disabled : ""}
      >
        {"<"}
      </button>
      {paginationPortion.map(item => (
        <button
          key={item}
          onClick={() => setCurrentPage(item)}
          className={item === currentPage ? style.active : ""}
        >
          {item}
        </button>
      ))}
      <button
        onClick={getNextPagePortion}
        className={
          currentPaginationPortion === lastPaginationPortion
            ? style.disabled
            : ""
        }
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
