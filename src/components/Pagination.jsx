import Next from "../assets/slider-right.svg";
import Prev from "../assets/slider-left.svg";
import "./style/Pagination.css";
export default function Pagination({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="pagination-container">
      <nav>
        <ul className="pagination justify-content-center">
          <li className={currentPage != 1 ? "page-item" : "page-item disabled"}>
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <img src={Prev} alt="prev" />
            </button>
          </li>
          {pages.map((page, index) => {
            return (
              <li
                className={`page-item ${currentPage === page ? "active" : ""}`}
                key={index}
              >
                <button
                  className="page-link"
                  key={index}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              </li>
            );
          })}
          <li
            className={
              currentPage != pages.length ? "page-item" : "page-item disabled"
            }
          >
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <img src={Next} alt="next" />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
