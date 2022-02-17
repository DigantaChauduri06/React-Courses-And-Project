import { useState, useEffect } from "react";

export const useFetch = (url) => {
  // States
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  //Helper Function
  const fetchData = async (url, abort) => {
    try {
      setIsPending(true);
      const res = await fetch(url, { signal: abort.signal });
      if (!res.ok) throw new Error(res.statusText);
      const json = await res.json();
      setData(json);
      setError(null);
      setIsPending(false);
    } catch (e) {
      if (e.name === "AbortError") {
        setError("Could Not Fetchs the data AbortError 404");
      } else {
        setError("Could Not Fetchs the data");
      }
      setData(null);
      setIsPending(false);
    }
  };
  useEffect(() => {
    const abort = new AbortController();
    fetchData(url, abort);

    return () => {
      abort.abort();
    };
  }, [url]);
  return [data, isPending, error];
};
