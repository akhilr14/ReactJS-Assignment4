export default function Delete() {
  return (
    <div className="delete-container">
      <br />
      Do you want to <strong>DELETE</strong> this employee
      <br />
      <br />
      <button className="btn btn-danger mr-sm-2">Delete</button>
      <button className="btn btn-outline-primary mr-sm">Cancel</button>
    </div>
  );
}
