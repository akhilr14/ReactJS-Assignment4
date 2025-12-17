import { useState, useEffect } from "react";
import "./CardWrapper.css";
import Pagination from "../Pagination/Pagination";
import CardList from "../CardList/CardList";
import Portal from "../Portal/Portal";
import Form from "../Form/Form";
import { getAllEmployee } from "../service";

export default function CardWrapper() {
  const [fetchedData, setFetchedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [isOpen, setIsOpen] = useState(false);

  const fetchEmployees = async () => {
    const data = await getAllEmployee();
    setFetchedData(data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = fetchedData.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="card-container">
      <div className="card-wrapper">
        <div className="button-wrapper">
          <button className="btn btn-success" onClick={() => setIsOpen(true)}>
            Add
          </button>
        </div>

        <CardList idData={currentPosts} refreshEmployees={fetchEmployees} />
      </div>
      <Pagination
        totalPosts={fetchedData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <Portal open={isOpen} onClose={() => setIsOpen(false)}>
        <Form
          employee={null}
          isEdit={false}
          refreshEmployees={fetchEmployees}
          onClose={() => setIsOpen(false)}
        />
      </Portal>
    </div>
  );
}
