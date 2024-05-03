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

const UserTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowDataToEdit, setRowDataToEdit] = useState(null);
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");

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

  // modal content
  const renderEditModalContent = () => {
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result);
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    };

    const handleVideoChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setVideo(reader.result);
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    };

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
            {key === "image" ? (
              <div>
                <input
                  type="file"
                  id={key}
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
                <label htmlFor={key}>
                  {image && (
                    <img
                      src={image}
                      alt="Uploaded Image"
                      style={{
                        width: "200px",
                        height: "100px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                        cursor: "pointer",
                      }}
                    />
                  )}
                  {!image && (
                    <div
                      style={{
                        width: "100%",
                        height: "70px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                        textAlign: "center",
                        lineHeight: "70px",
                        cursor: "pointer",
                        background: "#eee",
                      }}
                    >
                      Upload Image
                    </div>
                  )}
                </label>
              </div>
            ) : key === "video" ? (
              <div>
                <input
                  type="file"
                  id={key}
                  accept="video/*"
                  onChange={handleVideoChange}
                  style={{ display: "none" }}
                />
                <label htmlFor={key}>
                  {video && (
                    <video
                      style={{
                        width: "100%",
                        height: "100px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                        cursor: "pointer",
                      }}
                    >
                      <source src={video} type="video/mp4" />
                    </video>
                  )}
                  {!video && (
                    <div
                      style={{
                        width: "100%",
                        height: "70px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                        textAlign: "center",
                        lineHeight: "70px",
                        cursor: "pointer",
                        background: "#eee",
                      }}
                    >
                      Upload Video
                    </div>
                  )}
                </label>
              </div>
            ) : (
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
            )}
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
    { id: "email", label: "Email", minWidth: 170 },
    { id: "phone", label: "Phone", minWidth: 170 },
    { id: "image", label: "Image URL", minWidth: 170 },
    { id: "video", label: "Video URL", minWidth: 170 },
    { id: "category", label: "Category", minWidth: 170 },
    { id: "status", label: "Status", minWidth: 170 },
    { id: "actions", label: "Actions", minWidth: 100 },
  ];

  function createData(name, email, phone, image, video, category, status) {
    return { name, email, phone, image, video, category, status };
  }

  const rows = [
    createData(
      "Sandeep Chauhan",
      "sandeep@gmail.com",
      "8374837483",
      "https://example.com/image.jpg",
      "https://example.com/video.mp4",
      "Customer",
      "Active"
    ),
    createData(
      "Alice Smith",
      "alice@example.com",
      "+1987654321",
      "https://example.com/image.jpg",
      "https://example.com/video.mp4",
      "Admin",
      "Inactive"
    ),
    createData(
      "Michael Johnson",
      "michael@example.com",
      "+1123456789",
      "https://example.com/image.jpg",
      "https://example.com/video.mp4",
      "Customer",
      "Active"
    ),
    createData(
      "Emily Brown",
      "emily@example.com",
      "+1123456789",
      "https://example.com/image.jpg",
      "https://example.com/video.mp4",
      "Admin",
      "Inactive"
    ),
    createData(
      "Daniel Wilson",
      "daniel@example.com",
      "+1123456789",
      "https://example.com/image.jpg",
      "https://example.com/video.mp4",
      "Customer",
      "Active"
    ),
    createData(
      "Sophia Lee",
      "sophia@example.com",
      "+1123456789",
      "https://example.com/image.jpg",
      "https://example.com/video.mp4",
      "Admin",
      "Inactive"
    ),
    createData(
      "David Garcia",
      "david@example.com",
      "+1123456789",
      "https://example.com/image.jpg",
      "https://example.com/video.mp4",
      "Customer",
      "Active"
    ),
    createData(
      "Emma Martinez",
      "emma@example.com",
      "+1123456789",
      "https://example.com/image.jpg",
      "https://example.com/video.mp4",
      "Admin",
      "Inactive"
    ),
    createData(
      "Oliver Nguyen",
      "oliver@example.com",
      "+1123456789",
      "https://example.com/image.jpg",
      "https://example.com/video.mp4",
      "Customer",
      "Active"
    ),
    createData(
      "Isabella Kim",
      "isabella@example.com",
      "+1123456789",
      "https://example.com/image.jpg",
      "https://example.com/video.mp4",
      "Admin",
      "Inactive"
    ),
    createData(
      "James Rodriguez",
      "james@example.com",
      "+1123456789",
      "https://example.com/image.jpg",
      "https://example.com/video.mp4",
      "Customer",
      "Active"
    ),
    createData(
      "Charlotte Wang",
      "charlotte@example.com",
      "+1123456789",
      "https://example.com/image.jpg",
      "https://example.com/video.mp4",
      "Admin",
      "Inactive"
    ),
    createData(
      "Ethan Kumar",
      "ethan@example.com",
      "+1123456789",
      "https://example.com/image.jpg",
      "https://example.com/video.mp4",
      "Customer",
      "Active"
    ),
    createData(
      "Ava Gupta",
      "ava@example.com",
      "+1123456789",
      "https://example.com/image.jpg",
      "https://example.com/video.mp4",
      "Admin",
      "Inactive"
    ),
    createData(
      "Mia Patel",
      "mia@example.com",
      "+1123456789",
      "https://example.com/image.jpg",
      "https://example.com/video.mp4",
      "Customer",
      "Active"
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
        <h4 className="text-white text-lg font-semibold">User Table</h4>
        <div className="dropdown dropdown-bottom">
          <div
            tabIndex={0}
            role="button"
            className="border border-gray-600 px-3 text-sm rounded-md flex items-center gap-4 py-1 text-gray-900"
          >
            User Table <FaSortDown className="text-white"></FaSortDown>
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
              to="/dashboard/populationTable"
              className="hover:bg-gray-400 pl-6 py-1 rounded-md w-full duration-200"
            >
              Population Table
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

export default UserTable;
