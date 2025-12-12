export default function Delete() {
  return (
    <div className="delete-container">
      <div className="alert alert-danger alert-dismissible">
        <button type="button" className="close" data-dismiss="alert">
          &times;
        </button>
        Do you want to <strong>DELETE</strong> this employee
        <button className="btn btn-danger mr-sm-2">Delete</button>
        <button className="btn btn-outline-primary mr-sm">Cancel</button>
      </div>
    </div>
  );
}
