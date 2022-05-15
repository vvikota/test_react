import style from "./index.module.scss";
import userSVG  from "../../assets/images/user.svg";
import arrowSVG  from "../../assets/images/arrow.svg";

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className={style.header}>
      <h1>Movie Catalog</h1>
      <input
        type="text"
        onChange={e => setSearchQuery(e.target.value)}
        value={searchQuery}
        placeholder="Enter search query..."
      />
      <div className={style.user}>
        <img src={userSVG} alt="user" className={style.userImg}/>
        <p> Alexander Borisenko </p>
        <img src={arrowSVG} alt="arrow" className={style.arrowImg} />
      </div>  
    </header>
  );
};

export default Header;
