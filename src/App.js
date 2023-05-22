import { Blocks } from "react-loader-spinner";

import { Header } from "./components/header";

import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const isAuthLoader = useSelector((state) => state.auth.loading);
  const isCaaloguesLoader = useSelector((state) => state.catalogues.loading);
  const isVacanciesLoader = useSelector((state) => state.vacancies.loading);
  const isLoader = isAuthLoader || isCaaloguesLoader || isVacanciesLoader;

  return (
    <div className="App">
      <Header />
      {isLoader && (
        <div className="Loader">
          <Blocks
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
          />
        </div>
      )}
    </div>
  );
}

export default App;
