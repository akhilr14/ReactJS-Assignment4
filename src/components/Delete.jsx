import { deleteEmployee } from "./service";

export default function Delete({ employeeId, onClose, refreshEmployees }) {
  const handleDelete = async () => {
    try {
      await deleteEmployee(employeeId);
      onClose();
      refreshEmployees();
    } catch (error) {
      console.error("Failed to delete employee:", error);
      alert("Failed to delete employee.");
    }
  };

  return (
    <div className="delete-container">
      <br />
      Do you want to <strong>DELETE</strong> this employee
      <br />
      <br />
      <button className="btn btn-danger mr-sm-2" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
