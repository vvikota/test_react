import style from "./index.module.scss";
import Header from "../Header";
import Cards from "../Cards/";
import Pagination from "../Pagination/Pagination";
import dataAPI from "../../api/axios";
import { useState } from "react";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [appData, seAppData] = useState(null)

  const onChangeQuery = async ( value ) => {
    setSearchQuery(value);

    const response = await dataAPI.getFilmsData(value);
    seAppData(response)

  };

  return (
    <div className={style.app}>
      <Header searchQuery={searchQuery} setSearchQuery={onChangeQuery} />
      <section className={style.content}>
        <h2>You searched for: {searchQuery}, {appData?.totalResults} result</h2>
        <Cards data={appData?.Search}/>
        <Pagination />
      </section>
    </div>
  );
};

export default App;
