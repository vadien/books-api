import { useEffect } from "react";
import { getBooksBySearchTerm } from "./services/books-services";
import SearchContextProvider from "./context/SearchContextProvider";
import BooksPage from "./pages/BooksPage";
import "./App.css";

function App() {
  return (
    <>
      <SearchContextProvider>
        <BooksPage />
      </SearchContextProvider>
    </>
  );
}

export default App;
