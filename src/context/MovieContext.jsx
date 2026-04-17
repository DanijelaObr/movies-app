import { createContext, useState, useContext } from "react";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <MovieContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        searchResults,
        setSearchResults,
        isSearching,
        setIsSearching,
        query,
        setQuery,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export function useMovieContext() {
  return useContext(MovieContext);
}
