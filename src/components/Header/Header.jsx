import style from "./index.module.scss";

const Header = () => (
  <header className={style.header}>
    <h1>Movie Catalog</h1>
    <input type="text" />
    <div className={style.user}>
      Alexander Borisenko
    </div>
  </header>
);

export default Header;
