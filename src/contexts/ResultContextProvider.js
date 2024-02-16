import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseURL = "https://google-search74.p.rapidapi.com/";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (type) => {
    setIsLoading(true);
    const queryParams = new URLSearchParams({
      query: "onepiece photos",
      limit: "10",
      related_keywords: "true",
    });
    const response = await fetch(`${baseURL}?${queryParams.toString()}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ec4c13026cmsh90a93bd3a3346b7p1bf76fjsn155acdad328e",
        "X-RapidAPI-Host": "google-search74.p.rapidapi.com",
      },
    });
    const data = await response.json();
    console.log(data);
    setSearchTerm(data);
    setResults(data);
    setIsLoading(false);
  };
  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
