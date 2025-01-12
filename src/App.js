import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import ItemDetailsCards from "./components/inifinteScrolling/ItemDetailsCards";
import styled from "styled-components";

const itemPerPage = 5;
export default function App() {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [respData, setRespData] = useState(null);
  const [posts, setPosts] = useState([]);
  const loadingRef = useRef(null);
  const firstIndex = (page - 1) * itemPerPage;
  const lastIndex = page * itemPerPage;
  const getData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://dummyjson.com/posts`
        // `https://dummyjson.com/posts?limit=${itemPerPage}&skip=${firstIndex}`
      );
      console.log(response);
      if (response.status === 200) {
        const data = await response.json();
        setRespData(data);
        setPosts(data.posts.slice(firstIndex, lastIndex));
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (respData?.posts && page > 1) {
      setPosts(() => {
        return respData.posts.slice(firstIndex, lastIndex);
      });
    }
  }, [page]);
  const backButtonHandler = () => {
    setPage((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
    });
  };
  const nextButtonHandler = () => {
    setPage((prev) => {
      if (prev < respData.posts.length / itemPerPage) {
        return prev + 1;
      }
    });
  };

  console.log(loadingRef.current);
  return (
    <div className="app">
      <h2>Infinite Scrolling</h2>
      {isLoading && page === 1 ? (
        <p>Loading....</p>
      ) : error ? (
        <p>Opps! Something Went Wrong...</p>
      ) : (
        <div className="container">
          <ul>
            {respData &&
              posts.map((item) => (
                <ItemDetailsCards d key={item.id} item={item} />
              ))}
          </ul>
          <div>
            <button
              className="back"
              onClick={backButtonHandler}
              disabled={page === 1}
            >
              ⏮️
            </button>

            <span className="total_Page">
              Page {page} out of Total {respData?.posts.length / itemPerPage}
            </span>

            <button
              className="back"
              onClick={nextButtonHandler}
              disabled={page === respData?.posts.length / itemPerPage}
            >
              ⏭️
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
const Container = styled.main`
  text-align: center;
  height: 100%;
`;
