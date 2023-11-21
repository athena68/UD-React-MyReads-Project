import "./App.css";
import MainPage from "./MainPage";
import SearchPage from "./SearchPage";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      {showSearchPage ? (
        <SearchPage
          handleShowState={setShowSearchpage}
          showState={showSearchPage}
        />
      ) : (
        <MainPage />
      )}
      <div className="open-search">
        <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
      </div>
    </div>
  );
}

// function App() {
//   let navigate = useNavigate();

//   return (
//     <div className="app">
//       <Routes>
//         <Route exact path="/" element={<MainPage />} />
//         <Route path="/search" element={<SearchPage />} />
//       </Routes>
//     </div>
//   );
// }

export default App;
