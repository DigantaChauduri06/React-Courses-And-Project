import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = useCallback(
    async (controller) => {
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(res.status.toString() + " Error happend");
        const json = await res.json();
        setData(json);
        setError(null);
      } catch (e) {
        if (e.name === "AbortError") {
          console.log("Aborted!!");
        } else {
          setError("Couldnot fetch the data");
          console.log(e.message);
          setIsPending(false);
        }
      }
    },
    [url]
  );

  useEffect(() => {
    const controller = new AbortController();
    setIsPending(true);

    fetchData(controller);
    setIsPending(false);

    // Cleanup for unmounted components
    return () => {
      controller.abort();
    };
  }, [fetchData]);

  return [data, isPending, error];
};
