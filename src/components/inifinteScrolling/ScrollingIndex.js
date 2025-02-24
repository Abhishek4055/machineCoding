import { useEffect, useRef, useState } from "react";
import "../../App.css";
import ItemDetailsCards from "./ItemDetailsCards";
const PAGE_SIZE = 5;

export default function Scrolling() {
  const loadingRef = useRef(null);
  const [page, setPage] = useState(1);
  const [respData, setRespData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Api call
  const fetchData = async () => {
    const firstIndex = (page - 1) * PAGE_SIZE;
    setIsLoading(true);
    setError(null);
    try {
      const respPromise = await fetch(
        `https://dummyjson.com/posts?limit=${PAGE_SIZE}&skip=${firstIndex}`
      );
      const data = await respPromise.json();
      // console.log("data", data);
      setRespData((prevData) => [...prevData, ...data?.posts]);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  // let xyz = false;
  useEffect(() => {
    console.log("isLoading1", isLoading);
    if (!loadingRef.current) return;
    const handleIntersection = (entries) => {
      console.log("entries", entries[0].isIntersecting);
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
        console.log("page", page);
      }
    };
    const intersectObserver = new IntersectionObserver(handleIntersection, {
      threshold: 1.0,
    });
    console.log("isLoading2", isLoading);
    intersectObserver.observe(loadingRef.current);
    console.log("isLoading3", isLoading);

    return () => {
      if (loadingRef.current) intersectObserver.unobserve(loadingRef.current);
    };
  }, []);

  return (
    <div className="App">
      <h1>Infinite scrolling</h1>
      {isLoading && <p>Loading....</p>}
      {error && <p> Opps! Something Went wrong </p>}:
      {respData.length > 0 && (
        <>
          <ol>
            {respData.map((item, index) => (
              <ItemDetailsCards key={index} item={item} />
            ))}
          </ol>
          <p ref={loadingRef}>Loading more...</p>
        </>
      )}
    </div>
  );
}
