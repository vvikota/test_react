import style from "./index.module.scss";
import Header from "../Header";
import Cards from "../Cards/";
import Pagination from "../Pagination/Pagination";

const App = () => (
  <div className={style.app}>
    <Header />
    <section className={style.content}>
      <h2>You searched for: Batman, 338 result</h2>
      <Cards />
      <Pagination />
    </section>
  </div>
);

export default App;
