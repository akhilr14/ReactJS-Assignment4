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
    <div>
      <nav>
        <ul className="pagination justify-content-center">
          <li className={currentPage != 1 ? "page-item" : "page-item disabled"}>
            <a
              className="page-link"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </a>
          </li>
          {pages.map((page, index) => {
            return (
              <li className="page-item" key={index}>
                <a
                  className="page-link"
                  key={index}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </a>
              </li>
            );
          })}
          <li
            className={
              currentPage != pages.length ? "page-item" : "page-item disabled"
            }
          >
            <a
              className="page-link"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
      ;
    </div>
  );
}
