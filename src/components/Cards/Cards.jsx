import style from "./index.module.scss";
import default_img from "../../assets/images/film.jpeg";

const Cards = () => (
  <div className={style.CardsContainer}>

    <div className={style.card}>
      <div className={style.imgWrapper}>
        <img src={default_img} alt="pic" />
      </div>
      <div className={style.description}>
        <span>Name: Batman</span>
        <span>Year: 1996</span>
        <span>imdbID: 2387hg8</span>
        <span>Type: movie</span>
      </div>
    </div>
    <div className={style.card}>
      <div className={style.imgWrapper}>
        <img src={default_img} alt="pic" />
      </div>
      <div className={style.description}>
        <span>Name: Batman</span>
        <span>Year: 1996</span>
        <span>imdbID: 2387hg8</span>
        <span>Type: movie</span>
      </div>
    </div>
    <div className={style.card}>
      <div className={style.imgWrapper}>
        <img src={default_img} alt="pic" />
      </div>
      <div className={style.description}>
        <span>Name: Batman</span>
        <span>Year: 1996</span>
        <span>imdbID: 2387hg8</span>
        <span>Type: movie</span>
      </div>
    </div>
    <div className={style.card}>
      <div className={style.imgWrapper}>
        <img src={default_img} alt="pic" />
      </div>
      <div className={style.description}>
        <span>Name: Batman</span>
        <span>Year: 1996</span>
        <span>imdbID: 2387hg8</span>
        <span>Type: movie</span>
      </div>
    </div>
    <div className={style.card}>
      <div className={style.imgWrapper}>
        <img src={default_img} alt="pic" />
      </div>
      <div className={style.description}>
        <span>Name: Batman</span>
        <span>Year: 1996</span>
        <span>imdbID: 2387hg8</span>
        <span>Type: movie</span>
      </div>
    </div>
   


  </div>
);

export default Cards;
