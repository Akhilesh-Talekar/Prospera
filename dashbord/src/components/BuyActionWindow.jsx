import React, { useState, useContext } from "react";
import { Check, X, DollarSign, Hash, TrendingUp } from "lucide-react";
import { styles } from "../../constants";
import { GeneralContext } from "./GeneralContext";
import axios from "axios";
import { HomeContext } from "./HomeContext";
const BACKEND_URL = import.meta.env.BACKEND_URL;

const BuyActionWindow = ({ options }) => {
  const [values, setValues] = useState({
    stockQuantity: 1,
    stockPrice: options.price,
  });
  const [activeField, setActiveField] = useState(null);
  const genralContext = useContext(GeneralContext);
  const { id, wallet } = useContext(HomeContext);
  const margin = values.stockPrice * values.stockQuantity;

  const handelBuyClick = async () => {
    if (values.stockPrice < options.price) {
      alert("Price cannot be less than the current price");
      return;
    }

    if (values.stockPrice * values.stockQuantity > wallet) {
      alert("Insufficient funds");
      return;
    }

    await axios.post(`${BACKEND_URL}/buyStock`, {
      name: options.uId,
      qty: values.stockQuantity,
      price: values.stockPrice,
      mode: "BUY",
      userId: id,
    });

    await axios.post(`${BACKEND_URL}/marginUpdate`, {
      userId: id,
      margin: wallet - margin,
    });

    genralContext.closeBuyWindow();
    window.location.reload();
  };

  const handelCancelClick = () => {
    genralContext.closeBuyWindow();
  };

  const setVals = (e) => {
    setValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div style={{position:"fixed", top:"0px" , left:"0px", width:"100%", height:"100%", background:"rgba(0,0,0,0.5)", display:"flex", justifyContent:"center", alignItems:"center", zIndex:"1000"}}>
      <div style={styles.container} draggable>
        <h2 style={styles.header}>Place Buy Order</h2>

        <div style={styles.inputsContainer}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Quantity</label>
            <div style={styles.inputWrapper}>
              <Hash size={18} style={styles.icon} />
              <input
                name="stockQuantity"
                type="number"
                value={values.stockQuantity}
                onChange={setVals}
                onFocus={() => setActiveField("quantity")}
                onBlur={() => setActiveField(null)}
                style={{
                  ...styles.input,
                  borderColor:
                    activeField === "quantity" ? "#3B82F6" : "#E2E8F0",
                  boxShadow:
                    activeField === "quantity"
                      ? "0 0 0 4px rgba(59, 130, 246, 0.1)"
                      : "none",
                }}
                min="1"
              />
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>
              Price <span style={{ fontSize: "9px" }}>(Avg val)</span>
            </label>
            <div style={styles.inputWrapper}>
              <DollarSign size={18} style={styles.icon} />
              <input
                name="stockPrice"
                type="number"
                value={values.stockPrice}
                onFocus={() => setActiveField("price")}
                onBlur={() => setActiveField(null)}
                onChange={setVals}
                style={{
                  ...styles.input,
                  borderColor: activeField === "price" ? "#3B82F6" : "#E2E8F0",
                  boxShadow:
                    activeField === "price"
                      ? "0 0 0 4px rgba(59, 130, 246, 0.1)"
                      : "none",
                }}
                step="0.05"
              />
            </div>
          </div>
        </div>

        <div style={styles.marginInfo}>
          <TrendingUp size={18} color="#3B82F6" />
          <span style={styles.marginText}>
            Margin required: ₹
            {(values.stockPrice * values.stockQuantity).toFixed(2)}
          </span>
        </div>

        <div style={styles.buttonContainer}>
          <button
            style={{ ...styles.button, ...styles.buyButton }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-2px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
            onClick={handelBuyClick}
          >
            <Check size={20} />
            Buy
          </button>
          <button
            style={{ ...styles.button, ...styles.cancelButton }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#E2E8F0")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#F1F5F9")}
            onClick={handelCancelClick}
          >
            <X size={20} />
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
