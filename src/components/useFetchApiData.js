import { useEffect, useState } from "react";

export default function useFetchApiData({ url, method }) {
  const [respData, setRespData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method,
  };

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const respData = await fetch(url, options);
      const data = await respData.json();
      setRespData(data);
      // }
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url, method]);

  return { respData, isLoading, error };
}
