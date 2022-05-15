import style from "./index.module.scss";
import Header from "../Header";
import Cards from "../Cards/";
import Pagination from "../Pagination/Pagination";
import Preloader from "../Preloader/Preloader";
import dataAPI from "../../api/axios";
import { useState, useEffect } from "react";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [appData, seAppData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await dataAPI.getFilmsData(searchQuery, currentPage);
      seAppData(response);
      setIsLoading(false);
    };
    fetchData();
  }, [searchQuery, currentPage]);

  return (
    <div className={style.app}>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <section className={style.content}>
        {isLoading ? <Preloader/> : null}
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
