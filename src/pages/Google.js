import { useState, useEffect } from "react";

const CONTEXT_KEY = "75f9e3befa0354377";
const API_KEY = "AIzaSyC8ZzdiXftj_S3iipJaPpBnhh8cpIXIFC4"; // Replace with your actual API key

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
      .then(response => response.json())
      .then(result => {
        setData(result);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
    };
    fetchData();
  }, [term]);

  return data;
};

export default useGoogleSearch;
