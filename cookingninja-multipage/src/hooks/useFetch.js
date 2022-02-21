import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  //Fetching data
  const fetchingData = async (url, controller) => {
    setIsPending(true);
    try {
      const data = await fetch(url, { signal: controller.signal });
      if (!data.ok) return new Error(data.statusText);
      const json = await data.json();
      setError(null);
      setData(json);
      setIsPending(false);
    } catch (e) {
      if (e.name === "AbortError") {
        console.log("The Fetching was aborted");
      } else {
        setData(null);
        setError("Error Happend");
        setIsPending(false);
      }
    }
  };
  useEffect(() => {
    const controller = new AbortController();
    fetchingData(url, controller);
    return () => {
      controller.abort();
    };
  }, [url]);
  return { data, isPending, error };
}
