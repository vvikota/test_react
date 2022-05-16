import style from "./index.module.scss";
import Header from "../Header";
import Cards from "../Cards/";
import Pagination from "../Pagination/Pagination";
import Preloader from "../Preloader/Preloader";
import dataAPI from "../../api/axios";
import { useState, useEffect, useCallback } from "react";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [appData, setAppData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPaginationPortion, setPaginationPortion] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isRunningTimer, setRunning] = useState(false);
  const [timer, setTimer] = useState(0);

  const memoizedFetchData = useCallback(
    async page => {
      setIsLoading(true);
      const response = await dataAPI.getFilmsData(searchQuery, page);
      setAppData(response);
      setSearchResult(searchQuery);
      setIsLoading(false);
    },
    [searchQuery]
  );

  useEffect(() => {
    if (isRunningTimer) {
      const interval = setInterval(() => {
        if (timer > 500) {
          memoizedFetchData(1);
          setRunning(false);
          setTimer(0);
        } else {
          setTimer(prevTimer => prevTimer + 1);
        }
      }, 1);
      return () => clearInterval(interval);
    }
  }, [memoizedFetchData, isRunningTimer, timer]);

  const changeQuery = value => {
    setRunning(true);
    setTimer(0);
    setSearchQuery(value);
    setCurrentPage(1);
    setPaginationPortion(1);
  };

  return (
    <div className={style.app}>
      <Header searchQuery={searchQuery} setSearchQuery={changeQuery} />
      <section className={style.content}>
        {isLoading ? <Preloader /> : null}
        {appData?.Search ? (
          <>
            <h2>
              You searched for: {searchResult}, {appData?.totalResults} result
            </h2>
            <Cards data={appData?.Search} />
            <Pagination
              currentPage={currentPage}
              setCurrentPage={value => {
                setCurrentPage(value);
                memoizedFetchData(value);
              }}
              totalResults={appData?.totalResults}
              currentPaginationPortion={currentPaginationPortion}
              setPaginationPortion={setPaginationPortion}
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
