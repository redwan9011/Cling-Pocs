import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { FaSortDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import Modal from "../../../Components/custom-modal";
import { useState } from "react";

const MedicalTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowDataToEdit, setRowDataToEdit] = useState(null);

  const handleEditClick = (rowData) => {
    setRowDataToEdit(rowData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveChanges = (editedData) => {
    console.log("Edited Data:", editedData);
    setIsModalOpen(false);
  };

  const renderEditModalContent = () => {
    return (
      <div style={{ padding: "20px" }}>
        {Object.entries(rowDataToEdit).map(([key, value]) => (
          <div key={key} style={{ marginBottom: "15px" }}>
            <label
              htmlFor={key}
              style={{
                marginRight: "10px",
                textTransform: "capitalize",
                color: "#000",
              }}
            >
              {key}
            </label>
            <input
              id={key}
              value={value}
              onChange={(e) =>
                setRowDataToEdit({ ...rowDataToEdit, [key]: e.target.value })
              }
              style={{
                padding: "8px",
                color: "gray",
                background: "#eee",
                borderRadius: "4px",
                border: "1px solid #ccc",
                width: "100%",
              }}
            />
          </div>
        ))}
        <button
          onClick={() => handleSaveChanges(rowDataToEdit)}
          style={{
            padding: "10px 20px",
            width: "100%",
            backgroundColor: "rgb(59 130 246 / var(--tw-bg-opacity))",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Save Changes
        </button>
      </div>
    );
  };
  const columns = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "age", label: "Age", minWidth: 100 },
    { id: "gender", label: "Gender", minWidth: 100 },
    { id: "mobile", label: "Mobile", minWidth: 170 },
    { id: "appointment_time", label: "Appointment Time", minWidth: 170 },
    { id: "doctor_name", label: "Doctor Name", minWidth: 170 },
    { id: "actions", label: "Actions", minWidth: 100 },
  ];

  function createData(
    name,
    age,
    gender,
    mobile,
    appointment_time,
    doctor_name
  ) {
    return { name, age, gender, mobile, appointment_time, doctor_name };
  }

  const rows = [
    createData(
      "Sandeep Chauhan",
      30,
      "Male",
      1234567890,
      "10:00 AM",
      "Dr. Smith"
    ),
    createData(
      "Alice Smith",
      25,
      "Female",
      987654321,
      "11:00 AM",
      "Dr. Johnson"
    ),
    createData(
      "Michael Johnson",
      40,
      "Male",
      456789123,
      "12:00 PM",
      "Dr. Brown"
    ),
    createData("Emily Brown", 35, "Female", 789123456, "1:00 PM", "Dr. Wilson"),
    createData("Daniel Wilson", 28, "Male", 159357852, "2:00 PM", "Dr. Lee"),
    createData("Sophia Lee", 45, "Female", 369258147, "3:00 PM", "Dr. Garcia"),
    createData(
      "David Garcia",
      32,
      "Male",
      258369147,
      "4:00 PM",
      "Dr. Martinez"
    ),
    createData(
      "Emma Martinez",
      37,
      "Female",
      147258369,
      "5:00 PM",
      "Dr. Nguyen"
    ),
    createData("Oliver Nguyen", 29, "Male", 321654987, "6:00 PM", "Dr. Kim"),
    createData(
      "Isabella Kim",
      42,
      "Female",
      654321987,
      "7:00 PM",
      "Dr. Rodriguez"
    ),
    createData("James Rodriguez", 27, "Male", 951753456, "8:00 PM", "Dr. Wang"),
    createData(
      "Charlotte Wang",
      38,
      "Female",
      753951852,
      "9:00 PM",
      "Dr. Kumar"
    ),
    createData("Ethan Kumar", 31, "Male", 456123789, "10:00 PM", "Dr. Gupta"),
    createData("Ava Gupta", 26, "Female", 852369741, "11:00 PM", "Dr. Patel"),
    createData("Mia Patel", 39, "Female", 147963852, "12:00 AM", "Dr. Smith"),
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <div className="flex gap-6 items-center bg-blue-500 py-6 mx-5 px-2 rounded-lg relative -top-10">
        <h4 className="text-white text-lg font-semibold">Medical Table</h4>
        <div className="dropdown dropdown-bottom">
          <div
            tabIndex={0}
            role="button"
            className="border border-gray-600 px-3 text-sm rounded-md flex items-center gap-4 py-1 text-gray-900"
          >
            Medical Table <FaSortDown className="text-white"></FaSortDown>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52  space-y-2 "
          >
            <Link
              to="/dashboard/admissionTable"
              className="hover:bg-gray-400 pl-6 py-1 rounded-md w-full duration-200"
            >
              Admission Table
            </Link>
            <Link
              to="/dashboard/populationTable"
              className="hover:bg-gray-400 pl-6 py-1 rounded-md w-full duration-200"
            >
              Population Table
            </Link>
            <Link
              to="/dashboard/userTable"
              className="hover:bg-gray-400 pl-6 py-1 rounded-md w-full duration-200"
            >
              User Table
            </Link>
          </ul>
        </div>
      </div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.email}
                    >
                      {columns.map((column) => {
                        if (column.id === "actions") {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-around",
                                  alignItems: "center",
                                }}
                              >
                                <FaEdit
                                  onClick={() => handleEditClick(row)}
                                  style={{ cursor: "pointer" }}
                                />
                                <FaTrash
                                  style={{ cursor: "pointer", color: "red" }}
                                />
                              </div>
                            </TableCell>
                          );
                        } else {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        }
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {rowDataToEdit && renderEditModalContent()}
      </Modal>
    </>
  );
};

export default MedicalTable;
