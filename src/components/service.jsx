const URL = "https://trainingapi.zerone-consulting.net/api.publish/api";

//#region - Authenicate
const authenticate = async (creds) => {
  try {
    const res = await fetch(`${URL}/Account`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creds),
    });

    const token_api = await res.json();
    sessionStorage.setItem("authToken", token_api.token);
    return token_api.token;
  } catch (err) {
    console.log(err);
    return null;
  }
};
//#endregion

//#region - GET all Employees
const getAllEmployee = async () => {
  try {
    const token = sessionStorage.getItem("authToken");
    const res = await fetch(`${URL}/Employee`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    throw err;
    console.log(err);
  }
};
//#endregion

//#region - POST Employees
const postEmployee = async (data) => {
  const token = sessionStorage.getItem("authToken");
  const addEmployee = data;
  try {
    const res = await fetch(`${URL}/Employee/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addEmployee),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error creating employee:", error);
    throw error;
  }
};
//#endregion

//#region - PUT Update employees
const putEmployee = async (data) => {
  const token = sessionStorage.getItem("authToken");
  let employeeId = data.employeeID;
  let updateEmployee = data;
  try {
    const res = await fetch(`${URL}/Employee/${employeeId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateEmployee),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error creating employee:", error);
    throw error;
  }
};
//#endregion

//#region - DELETE Employees
const deleteEmployee = async (employeeId) => {
  const token = sessionStorage.getItem("authToken");
  try {
    const res = await fetch(`${URL}/Employee/${employeeId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error deleting employee:", error);
    throw error;
  }
};
//#endregion

export {
  authenticate,
  getAllEmployee,
  postEmployee,
  putEmployee,
  deleteEmployee,
};
