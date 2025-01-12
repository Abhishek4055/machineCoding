import axios from "axios";
import { useEffect, useState } from "react";

function useAxiosAPICall({ url, method, header = null, body = null }) {
  const [respData, setRespData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(null);

  const fetchData = async (url) => {
    setIsLoading(true);
    setIsError(null);
    try {
      const response = await fetch(url, { method, header, body });
      console.log(response);
      if (response?.status === 200) {
        setRespData(response?.data);
      }
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (url) fetchData(url);
  }, [url, method, body, header]);

  return { respData, isLoading, error };
}

export default useAxiosAPICall;
