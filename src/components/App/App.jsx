import style from "./index.module.scss";
import Header from "../Header";
import Cards from "../Cards/";
import Pagination from "../Pagination/Pagination";
import dataAPI from "../../api/axios";
import { useState, useEffect } from "react";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [appData, seAppData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await dataAPI.getFilmsData(searchQuery, currentPage);
      seAppData(response);
    };
    fetchData();
  }, [searchQuery, currentPage]);

  return (
    <div className={style.app}>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <section className={style.content}>
        {appData?.Search ? (
          <>
            <h2>
              You searched for: {searchQuery}, {appData?.totalResults} result
            </h2>
            <Cards data={appData?.Search} />
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalResults={appData?.totalResults}
            />
          </>
        ) : (
          <p>Movie not found!</p>
        )}
      </section>
    </div>
  );
};

export default App;
