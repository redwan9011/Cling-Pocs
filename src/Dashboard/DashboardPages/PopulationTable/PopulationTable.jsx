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

const PopulationTable = () => {
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
    { id: "name", label: "Country", minWidth: 170 },
    { id: "population", label: "Population", minWidth: 100 },
    { id: "size", label: "Size (km²)", minWidth: 100 },
    { id: "density", label: "Density", minWidth: 100, align:"center"  },
    { id: "average_age", label: "Average Age", minWidth: 170, align:"center"  },
    { id: "urbanization", label: "Urbanization", minWidth: 170, align:"center"  },
    { id: "gender_ratio", label: "Gender Ratio", minWidth: 170, align:"center" },
    { id: "actions", label: "Actions", minWidth: 100 },
  ];

  function createData(
    name,
    population,
    size,
    density,
    average_age,
    urbanization,
    gender_ratio
  ) {
    return {
      name,
      population,
      size,
      density,
      average_age,
      urbanization,
      gender_ratio,
    };
  }

  const rows = [
    createData("India", 1324171354, 3287263, 403, "60 years", "35.5%", "10/9"),
    createData("China", 1444216107, 9596961, 153, "76 years", "61.4%", "10/1"),
    createData(
      "United States",
      331002651,
      9833517,
      655,
      "78.5 years",
      "82.8%",
      "7/4"
    ),
    createData(
      "Indonesia",
      273523615,
      1910931,
      151,
      "71.7 years",
      "56.4%",
      "8/17"
    ),
    createData(
      "Pakistan",
      220892340,
      881912,
      287,
      "67.3 years",
      "36.4%",
      "8/14"
    ),
    createData("Brazil", 212559417, 8515767, 25, "75.9 years", "87.6%", "9/7"),
    createData(
      "Nigeria",
      206139589,
      923768,
      226,
      "55.2 years",
      "52.0%",
      "10/1"
    ),
    createData(
      "Bangladesh",
      164689383,
      147570,
      1116,
      "73.2 years",
      "39.4%",
      "3/26"
    ),
    createData("Russia", 145934462, 17098242, 9, "72.6 years", "73.7%", "6/12"),
    createData("Mexico", 128932753, 1964375, 66, "75.2 years", "83.8%", "9/16"),
    createData("Japan", 126476461, 377975, 335, "84.6 years", "91.8%", "2/11"),
    createData(
      "Ethiopia",
      114963588,
      1104300,
      112,
      "66.6 years",
      "21.3%",
      "5/5"
    ),
    createData(
      "Philippines",
      109581078,
      300000,
      365,
      "71.2 years",
      "47.5%",
      "6/12"
    ),
    createData("Egypt", 102334404, 1002450, 102, "73.9 years", "43.0%", "7/23"),
    createData("Vietnam", 97338579, 331212, 294, "76.3 years", "38.4%", "9/2"),
    createData(
      "DR Congo",
      89561403,
      2344858,
      38,
      "60.0 years",
      "46.7%",
      "6/30"
    ),
    createData("Turkey", 84339067, 783356, 108, "77.7 years", "75.0%", "10/29"),
    createData("Iran", 83992949, 1648195, 51, "75.5 years", "76.5%", "4/1"),
    createData("Germany", 83783942, 357022, 235, "81.0 years", "76.0%", "10/3"),
    createData(
      "Thailand",
      69799978,
      513120,
      136,
      "77.1 years",
      "51.5%",
      "12/5"
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
        <h4 className="text-white text-lg font-semibold">Population Table</h4>
        <div className="dropdown dropdown-bottom">
          <div
            tabIndex={0}
            role="button"
            className="border border-gray-600 px-3 text-sm rounded-md flex items-center gap-4 py-1 text-gray-900"
          >
            Population Table <FaSortDown className="text-white"></FaSortDown>
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
              to="/dashboard/medicalTable"
              className="hover:bg-gray-400 pl-6 py-1 rounded-md w-full duration-200"
            >
              Medical Table
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

export default PopulationTable;
