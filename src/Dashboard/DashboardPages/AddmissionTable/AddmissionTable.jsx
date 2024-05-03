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

const AddmissionTable = () => {
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
    { id: "email", label: "Email", minWidth: 100 },
    {
      id: "address",
      label: "Address",
      minWidth: 170,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "father_name",
      label: "Father-Name",
      minWidth: 170,
      align: "left",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "mobile_number",
      label: "Mobile Number",
      minWidth: 170,
      align: "left",
    },

    { id: "actions", label: "Actions", minWidth: 100 },
  ];

  function createData(name, email, address, father_name, mobile_number) {
    return { name, email, address, father_name, mobile_number };
  }

  const rows = [
    createData(
      "Sandeep Chauhan",
      "sandeep.chauhan@gmail.com",
      "Dehradun Uttarakhand, India",
      "V.S Chauhan",
      1234567890
    ),
    createData(
      "Alice Smith",
      "alice.smith@gmail.com",
      "London, UK",
      "Smith & Co.",
      987654321
    ),
    createData(
      "Michael Johnson",
      "michael.johnson@gmail.com",
      "Los Angeles, USA",
      "Johnson Enterprises",
      456789123
    ),
    createData(
      "Emily Brown",
      "emily.brown@gmail.com",
      "Paris, France",
      "Brown Corp",
      789123456
    ),
    createData(
      "Daniel Wilson",
      "daniel.wilson@gmail.com",
      "Sydney, Australia",
      "Wilson & Sons",
      159357852
    ),
    createData(
      "Sophia Lee",
      "sophia.lee@gmail.com",
      "Seoul, South Korea",
      "Lee Holdings",
      369258147
    ),
    createData(
      "David Garcia",
      "david.garcia@gmail.com",
      "Madrid, Spain",
      "Garcia Group",
      258369147
    ),
    createData(
      "Emma Martinez",
      "emma.martinez@gmail.com",
      "Mexico City, Mexico",
      "Martinez Industries",
      147258369
    ),
    createData(
      "Oliver Nguyen",
      "oliver.nguyen@gmail.com",
      "Toronto, Canada",
      "Nguyen Corporation",
      321654987
    ),
    createData(
      "Isabella Kim",
      "isabella.kim@gmail.com",
      "Tokyo, Japan",
      "Kim Enterprises",
      654321987
    ),
    createData(
      "James Rodriguez",
      "james.rodriguez@gmail.com",
      "Buenos Aires, Argentina",
      "Rodriguez Ltd.",
      951753456
    ),
    createData(
      "Charlotte Wang",
      "charlotte.wang@gmail.com",
      "Shanghai, China",
      "Wang Holdings",
      753951852
    ),
    createData(
      "Ethan Kumar",
      "ethan.kumar@gmail.com",
      "Mumbai, India",
      "Kumar & Co.",
      456123789
    ),
    createData(
      "Ava Gupta",
      "ava.gupta@gmail.com",
      "São Paulo, Brazil",
      "Gupta Group",
      852369741
    ),
    createData(
      "Mia Patel",
      "mia.patel@gmail.com",
      "Moscow, Russia",
      "Patel Corporation",
      147963852
    ),
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
        <h4 className="text-white text-lg font-semibold">Admission Table</h4>
        <div className="dropdown dropdown-bottom">
          <div
            tabIndex={0}
            role="button"
            className="border border-gray-600 px-3 text-sm rounded-md flex items-center gap-4 py-1 text-gray-900"
          >
            Admission Table <FaSortDown className="text-white"></FaSortDown>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52  space-y-2 "
          >
            <Link
              to="/dashboard/medicalTable"
              className="hover:bg-gray-400 pl-6 py-1 rounded-md w-full duration-200"
            >
              Medical Table
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

export default AddmissionTable;
