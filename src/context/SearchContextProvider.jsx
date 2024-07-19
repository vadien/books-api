import { createContext, useState } from "react";

export const SearchContext = createContext(null);

const SearchContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <SearchContext.Provider
      value={{ searchTerm, setSearchTerm, currentIndex, setCurrentIndex }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
