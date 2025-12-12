import { useState } from "react";
import "../components/style/CardWrapper.css";
import Pagination from "./Pagination";
import CardList from "./CardList";

export default function CardWrapper() {
  const [idData, setIdData] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = idData.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="Container">
      <div className="CardWrapper-Container">
        <CardList idData={currentPosts} />
      </div>
      <Pagination
        totalPosts={idData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}
