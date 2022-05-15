import style from "./index.module.scss";
import default_img from "../../assets/images/film.jpeg";

const Cards = ({ data }) => (
  <div className={style.CardsContainer}>
    {data?.map(item => (
      <div className={style.card} key={item.imdbID}>
        <div className={style.imgWrapper}>
          <img src={item.Poster !== "N/A"? item.Poster : default_img} alt="pic" />
        </div>
        <div className={style.description}>
          <span>Name: {item.Title}</span>
          <span>Year: {item.Year}</span>
          <span>imdbID: {item.imdbID}</span>
          <span>Type: {item.Type}</span>
        </div>
      </div>
    ))}
  </div>
);

export default Cards;
