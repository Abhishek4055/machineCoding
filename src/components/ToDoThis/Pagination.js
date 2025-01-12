import React, { useState, useEffect } from "react";
import styled from "styled-components";

const PaginationExample = () => {
  const PAGE_SIZE = 5; // Number of posts per page
  const [tableData, setTableData] = useState({}); // Cache to store fetched pages
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  // Fetch posts based on the current page
  const fetchPosts = async (page) => {
    // If data is already in the cache, no API call needed
    if (tableData[page]) return;

    setLoading(true);
    const firstIndex = (page - 1) * PAGE_SIZE;
    try {
      const response = await fetch(
        `https://dummyjson.com/posts?limit=${PAGE_SIZE}&skip=${firstIndex}`
      );
      const data = await response.json();

      setTableData((prevCache) => ({
        ...prevCache,
        [page]: data.posts,
      }));

      if (page === 1) {
        setTotalPages(Math.ceil(data.total / PAGE_SIZE));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  console.log("tableData", tableData);

  return (
    <Wraper>
      <Container>
        <table className="table">
          <thead>
            <tr className="table_header_row">
              <th>Id</th>
              <th>Title</th>
              <th>Discription</th>
            </tr>
          </thead>
          {loading ? (
            <h1>loading...</h1>
          ) : (
            tableData &&
            tableData[currentPage]?.map((item) => (
              <tbody key={item?.id}>
                <tr className="table_body_row">
                  <td>{item?.id}</td>
                  <td>{item?.title}</td>
                  <td>{item?.body}</td>
                </tr>
              </tbody>
            ))
          )}
          <tfoot>
            <tr>
              <th onClick={handlePrevious}>⏮️</th>
              <th>
                Page {currentPage} of {totalPages}
              </th>
              <th onClick={handleNext}>⏭️</th>
            </tr>
          </tfoot>
        </table>
      </Container>
    </Wraper>
  );
};

const Wraper = styled.div`
  width: 100%;
  height: 100vh;
`;
const Container = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  tr,
  td {
    padding: 5px;
    border: 1px solid;
  }
  .table {
    border-collapse: collapse;
    border: 2px solid rgb(140 140 140);
    font-family: sans-serif;
    font-size: 0.8rem;
    letter-spacing: 1px;
  }
  thead,
  tfoot {
    background-color: rgb(228 240 245);
  }
`;

export default PaginationExample;
