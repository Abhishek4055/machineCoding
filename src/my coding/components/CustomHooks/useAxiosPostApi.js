import { useState, useCallback } from "react";
import axios from "axios";

const usePost = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (url, body, options = {}) => {
    setLoading(true);
    try {
      const response = await axios.post(url, body, options);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, fetchData };
};

export default usePost;
