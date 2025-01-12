import axios from "axios";
import { useCallback, useState } from "react";

const useGetApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = useCallback(async (url, options) => {
    setLoading(true);
    setError(null);
    try {
      const respData = await axios.get(url, options);
      setData(respData.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, error, loading, fetchData };
};
export default useGetApi;
