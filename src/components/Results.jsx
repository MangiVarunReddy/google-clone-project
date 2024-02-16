import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { useResultContext } from "../contexts/ResultContextProvider";
import { Loading } from "./Loading";
import { ResultContextProvider } from "../contexts/ResultContextProvider";
import { list } from "postcss";

export const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  useEffect(() => {
    getResults();
  }, []);

  const location = useLocation();
  console.log(location.pathname);
  if (isLoading) return <Loading />;
  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between spac-y-6 sm:px-56">
          {results?.results?.map((result, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={result.url} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {result.url.length > 30
                    ? result.url.substring(0, 30)
                    : result.url}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {result.title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
      break;
    case "/images":
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.results?.map(
            (result, index) =>
              // Check if 'image' and 'link' properties exist before accessing their properties
              result.image &&
              result.link && (
                <a
                  className="sm:p-3 p-5"
                  href={result.link.href}
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={result.image.url}
                    alt={result.link.title}
                    loading="lazy"
                  />
                  <p className="w-36 break-words text-sm mt-2">
                    {result.link.title}
                  </p>
                </a>
              )
          )}
        </div>
      );
      break;
    case "/news":
      return "news";
      break;
    case "/videos":
      return "videos";
      break;
    default:
      return "Error";
  }
};
