import React, { useState, useContext, useEffect } from "react";
import { Check, X, DollarSign, Hash, TrendingUp } from "lucide-react";
import { sellStyles, quantityStyles } from "../../constants";
import { GeneralContext } from "./GeneralContext";
import axios from "axios";
import { HomeContext } from "./HomeContext";

const BuyActionWindow = ({ options }) => {
  const [values, setValues] = useState({
    stockQuantity: 1,
    stockPrice: options.price,
  });
  const [activeField, setActiveField] = useState(null);
  const generalContext = useContext(GeneralContext);
  const { id, wallet } = useContext(HomeContext);
  const [holdings, setHoldings] = useState([]);
  const margin = values.stockQuantity * values.stockPrice;

  useEffect(() => {
    axios
      .post(`http://localhost:3000/showHoldings`, {
        stockId: options.uId,
        userId: id,
      })
      .then((res) => {
        setHoldings(res.data);
      });
  }, []);

  const availableQuantity = holdings.reduce((acc, stock) => acc + stock.qty, 0);

  const handelCancelClick = () => {
    generalContext.closeSellWindow();
  };

  const handelSellClick = async () => {
    try {
      if (values.stockPrice > options.price) {
        alert("Avg value cannot be more than the current price");
        return;
      }

      if (values.stockQuantity > availableQuantity) {
        alert("Insufficient quantity");
        return;
      }

      // First API call
      await axios.post("http://localhost:3000/sellStock", {
        uID: options.uId,
        quantityToSell: values.stockQuantity,
        avgCost: values.stockPrice,
        userId: id,
      });

      console.log("First API call successful");
      // Second API call
      await axios.post("http://localhost:3000/marginUpdate", {
        userId: id,
        margin: wallet + margin,
      });

      // Close the sell window and reload the page
      generalContext.closeSellWindow();
      window.location.reload();
      console.log("Sell operation successful");
    } catch (error) {
      console.error("Error during sell operation:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const setVals = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div style={{position:"fixed", top:"0px" , left:"0px", width:"100%", height:"100%", background:"rgba(0,0,0,0.5)", display:"flex", justifyContent:"center", alignItems:"center", zIndex:"1000"}}>
      <div style={sellStyles.container}>
        <h2 style={sellStyles.header}>Place Sell Order</h2>

        <div style={sellStyles.inputsContainer}>
          <div style={sellStyles.inputGroup}>
            <div style={quantityStyles.labelWrapper}>
              <label style={sellStyles.label}>
                Quantity
                <div style={quantityStyles.availableTag}>
                  <span style={quantityStyles.tagLabel}>Avl.</span>
                  <span style={quantityStyles.tagValue}>
                    {availableQuantity}
                  </span>
                </div>
              </label>
            </div>
            <div style={sellStyles.inputWrapper}>
              <Hash size={18} style={sellStyles.icon} />
              <input
                name="stockQuantity"
                type="number"
                value={values.stockQuantity}
                onChange={setVals}
                onFocus={() => setActiveField("quantity")}
                onBlur={() => setActiveField(null)}
                style={{
                  ...sellStyles.input,
                  borderColor:
                    activeField === "quantity" ? "#3B82F6" : "#E2E8F0",
                  boxShadow:
                    activeField === "quantity"
                      ? "0 0 0 4px rgba(59, 130, 246, 0.1)"
                      : "none",
                }}
                min="1"
                max={availableQuantity}
              />
            </div>
          </div>

          <div style={sellStyles.inputGroup}>
            <label style={sellStyles.label}>
              Price <span style={{ fontSize: "9px" }}>(Avg val)</span>
            </label>
            <div style={sellStyles.inputWrapper}>
              <DollarSign size={18} style={sellStyles.icon} />
              <input
                name="stockPrice"
                type="number"
                value={values.stockPrice}
                onFocus={() => setActiveField("price")}
                onBlur={() => setActiveField(null)}
                onChange={setVals}
                style={{
                  ...sellStyles.input,
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

        <div style={sellStyles.marginInfo}>
          <TrendingUp size={18} color="#3B82F6" />
          <span style={sellStyles.marginText}>
            Margin acquired: $
            {(values.stockPrice * values.stockQuantity).toFixed(2)}
          </span>
        </div>

        <div style={sellStyles.buttonContainer}>
          <button
            style={{ ...sellStyles.button, ...sellStyles.sellButton }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-2px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
            onClick={handelSellClick}
          >
            <Check size={20} />
            Sell
          </button>
          <button
            style={{ ...sellStyles.button, ...sellStyles.cancelButton }}
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
