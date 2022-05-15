import style from "./index.module.scss";

const Preloader = () => (
  <div className={style.spinnerWrapper}>
    <div className={style.spinner}>
      <div className={style.bar}></div>
      <div className={style.bar}></div>
      <div className={style.bar}></div>
      <div className={style.bar}></div>
      <div className={style.bar}></div>
      <div className={style.bar}></div>
      <div className={style.bar}></div>
      <div className={style.bar}></div>
      <div className={style.bar}></div>
      <div className={style.bar}></div>
      <div className={style.bar}></div>
      <div className={style.bar}></div>
    </div>
  </div>
);

export default Preloader;
