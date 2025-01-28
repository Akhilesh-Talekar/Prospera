import React from "react";
import { Link } from "react-router-dom";
import { FundContext } from "./FundContext";
import { formatCurrency } from "../../constants";
import { HomeContext } from "./HomeContext";


const Funds = () => {
  const {openFundWindow} = React.useContext(FundContext);
  const {wallet} = React.useContext(HomeContext);
  

  const styles = {
    funds: {
      padding: "2rem",
      background: "#f8f9fa",
      borderRadius: "10px",
      margin: "20px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      textAlign: "center"
    },
    title: {
      fontSize: "1.5rem",
      color: "#2c3e50",
      marginBottom: "1.5rem"
    },
    btnGreen: {
      background: "#2ecc71",
      color: "white",
      padding: "10px 20px",
      borderRadius: "5px",
      textDecoration: "none",
      margin: "0 10px",
      transition: "all 0.3s ease",
      display: "inline-block"
    },
    btnBlue: {
      background: "#3498db",
      color: "white",
      padding: "10px 20px",
      borderRadius: "5px",
      textDecoration: "none",
      margin: "0 10px",
      transition: "all 0.3s ease",
      display: "inline-block"
    },
    row: {
      display: "flex",
      gap: "2rem",
      padding: "20px",
    },
    col: {
      flex: 1,
      background: "white",
      borderRadius: "10px",
      padding: "1.5rem",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)"
    },
    table: {
      width: "100%"
    },
    data: {
      display: "flex",
      justifyContent: "space-between",
      padding: "8px 0",
      color: "#555"
    },
    imp: {
      fontWeight: "bold",
      color: "#2c3e50"
    },
    colored: {
      color: "#27ae60"
    },
    hr: {
      border: "none",
      borderTop: "1px solid #eee",
      margin: "15px 0"
    },
    commodity: {
      textAlign: "center",
      padding: "2rem",
      background: "#f8f9fa",
      borderRadius: "8px"
    }
  };

  const openWindow = () => {
    openFundWindow();
  };


  return (
    <>
      <div style={styles.funds}>
        <p style={styles.title}>Instant, zero-cost fund transfers with UPI</p>
        <Link style={styles.btnGreen} onClick={openWindow}>Add funds</Link>
        <Link style={styles.btnBlue}>Withdraw</Link>
      </div>

      <div style={styles.row}>
        <div style={styles.col}>
          <span>
            <p style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "1rem" }}>Equity</p>
          </span>

          <div style={styles.table}>
            <div style={styles.data}>
              <p>Available margin</p>
              <p style={{...styles.imp, ...styles.colored}}>{formatCurrency(wallet)}</p>
            </div>
            {/* Apply similar styles to other data divs */}
            <div style={styles.data}>
              <p>Used margin</p>
              <p style={styles.imp}>3,757.30</p>
            </div>
            <div style={styles.data}>
              <p>Available cash</p>
              <p style={styles.imp}>4,043.10</p>
            </div>
            <hr style={styles.hr} />
            {/* Continue with the rest of your data divs using the same pattern */}
          </div>
        </div>

        <div style={styles.col}>
          <div style={styles.commodity}>
            <p style={{ marginBottom: "1rem" }}>You don't have a commodity account</p>
            <Link style={styles.btnBlue}>Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;