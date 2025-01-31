import React, { useState } from "react";
import { FundContext } from "./FundContext";
import { HomeContext } from "./HomeContext";
import axios from "axios";
const BACKEND_URL = import.meta.env.BACKEND_URL;

const FundWindow = () => {
  const [amount, setAmount] = useState("");
  const { closeFundWindow } = React.useContext(FundContext);
  const { wallet, id } = React.useContext(HomeContext);

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    animation: "fadeIn 0.3s ease-out",
  };

  const modalStyle = {
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 24px rgba(0, 0, 0, 0.1)",
    width: "400px",
    padding: "24px",
    transition: "all 0.3s ease-out",
  };

  const closeWindow = () => {
    closeFundWindow();
  };

  const addFunds = async () => {
    if (amount === "") {
      alert("Please enter an amount");
      return;
    }

    if (isNaN(amount)) {
      alert("Please enter a valid amount");
      return;
    }

    if (amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    await axios.post(`${BACKEND_URL}/marginUpdate`, {
      userId: id,
      margin: parseInt(amount) + wallet,
    });

    closeFundWindow();
    window.location.reload();
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <h2
            style={{ fontSize: "24px", fontWeight: "bold", color: "#1a1a1a" }}
          >
            Add Funds
          </h2>
        </div>

        <div style={{ position: "relative", marginBottom: "24px" }}>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            style={{
              width: "100%",
              padding: "12px 12px 12px 40px",
              borderRadius: "8px",
              border: "1px solid #e0e0e0",
              fontSize: "16px",
              outline: "none",
              boxSizing: "border-box",
              transition: "border-color 0.2s",
            }}
          />
          <span
            style={{
              position: "absolute",
              left: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#666",
            }}
          >
            $
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "8px",
            marginBottom: "24px",
          }}
        >
          {[100, 500, 1000].map((value) => (
            <button
              key={value}
              onClick={() => setAmount(value.toString())}
              style={{
                padding: "8px 16px",
                backgroundColor: "#f5f5f5",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "background-color 0.2s",
                fontSize: "14px",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#e0e0e0";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#f5f5f5";
              }}
            >
              ${value}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
          }}
        >
          <button className="cancel-button" onClick={closeWindow}>
            <span>Cancel</span>
          </button>

          <button
            style={{
              flex: 1,
              padding: "12px",
              border: "none",
              borderRadius: "8px",
              background: "linear-gradient(to right, #4a90e2, #845ef7)",
              color: "white",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
            onMouseOver={(e) => {
              e.target.style.background =
                "linear-gradient(to right, #845ef7, #4a90e2)";
            }}
            onMouseOut={(e) => {
              e.target.style.background =
                "linear-gradient(to right, #4a90e2, #845ef7)";
            }}
            onClick={addFunds}
          >
            Add Funds
          </button>
        </div>
      </div>
    </div>
  );
};

export default FundWindow;
