import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";

const InfiniteScrolling = () => {
  const PAGE_SIZE = 10;
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loadingRef = useRef(null);

  const fetchPosts = async (page) => {
    setLoading(true);
    const firstIndex = (page - 1) * PAGE_SIZE;
    try {
      const response = await fetch(
        `https://dummyjson.com/posts?limit=${PAGE_SIZE}&skip=${firstIndex}`
      );
      const data = await response.json();

      setTableData((prevCache) => [...prevCache, ...data.posts]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  console.log("currentPage", tableData);

  useEffect(() => {
    if (!loadingRef.current) return;
    const loadingObserver = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        if (entries[0].isIntersecting) {
          setCurrentPage((prev) => prev + 1);
        }
      },
      {
        threshold: 1.0,
      }
    );

    loadingObserver.observe(loadingRef.current);
    return () => {
      if (loadingRef.current) loadingObserver.unobserve(loadingRef.current);
    };
  }, [tableData]);

  return (
    <Wraper>
      <Container>
        {tableData &&
          tableData.map((item, index) => (
            <div key={index} className="card">
              <h1 className="id">{item?.id}</h1>
              <h3 className="id">{item?.title}</h3>
              <p className="id">{item?.body}</p>
            </div>
          ))}
        <div ref={loadingRef}>Loading...</div>
      </Container>
    </Wraper>
  );
};

const Wraper = styled.div`
  width: 100%;
  /* height: 100vh; */
`;
const Container = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200, 1fr));
  align-items: center;
  justify-content: center;
  gap: 20px;
  .card {
    /* width: ;
    height: 250px; */
    border: 1px solid;
    box-shadow: inset 0 0 10 #ffc;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding: 20px;
    box-sizing: border-box;
    overflow: auto;
  }
`;

export default InfiniteScrolling;
