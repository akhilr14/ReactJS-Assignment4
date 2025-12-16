import { useState, useEffect } from "react";
import "../components/style/CardWrapper.css";
import Pagination from "./Pagination";
import CardList from "./CardList";

const URL =
  "https://trainingapi.zerone-consulting.net/api.publish/api/Employee";
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjM2OTg1MzNiLTk2NWUtNDExMy04MDQwLTY2NDhkYTE1NmFmOCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJBZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFkbWluYWtwQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiZGQ4MmQxOTMtYzQzNS00ZjQxLTgxMzUtNzlhYjhkNTJhZTFjIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiRGVjIFdlZCAxNyAyMDI1IDA2OjI2OjU0IEFNIiwibmJmIjoxNzY1ODY2NDE0LCJleHAiOjE3NjU5MzMwMTQsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcxNzAiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjcxNzAifQ.ZherpHwA2Qs9IPw50cdzg47k_EOUT7j694nAkYDYEiE`;

export default function CardWrapper() {
  const [fetchedData, setFetchedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = fetchedData.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    //const token = localStorage.getItem("token");
    const res = await fetch(`${URL}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    setFetchedData(data);
  }

  return (
    <div className="card-container">
      <div className="cardWrapper">
        <CardList idData={currentPosts} />
      </div>
      <Pagination
        totalPosts={fetchedData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}
