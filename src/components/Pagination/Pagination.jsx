import style from "./index.module.scss";

const Pagination = () => (
  <div className={style.PaginationContainer}>
    <button>left arrow</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>right arrow</button>
  </div>
);

export default Pagination;
