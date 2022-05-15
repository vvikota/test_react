import style from "./index.module.scss";

const Header = ({searchQuery, setSearchQuery}) => {


  return (
    <header className={style.header}>
      <h1>Movie Catalog</h1>
      <input
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
      />
      <div className={style.user}>
        Alexander Borisenko
      </div>
    </header>
  );
}

export default Header;
