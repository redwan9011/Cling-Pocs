import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        zIndex: "999999",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
      }}
    >
      <div
        style={{
          backgroundColor: "#fefefe",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          maxWidth: "500px",
          width: "80%",
          maxHeight: "80%",
          overflowY: "auto",
          zIndex: "1000000",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <h2 style={{ margin: 0, color: "#000000", fontWeight: "700" }}>
            Edit Data
          </h2>
          <span
            style={{
              color: "#aaa",
              fontSize: "24px",
              cursor: "pointer",
              color: "#000000",
              fontWeight: "700",
            }}
            onClick={onClose}
          >
            &times;
          </span>
        </div>
        <div style={{ marginBottom: "20px" }}>{children}</div>
        {/* <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "16px" }} onClick={onClose}>Close</button>
        </div> */}
      </div>
    </div>
  );
};

export default Modal;
