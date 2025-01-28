import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Loader2 } from "lucide-react";
import axios from "axios";

const AuthForm = ({ type = "sign-in" }) => {
  const [viewpassword, setViewPassword] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [credientials, setCredientials] = useState({
    email: "",
    password: "",
    confirmPass: "",
    username: "",
    walletBalance: "",
  });

  const { email, password, confirmPass, username, walletBalance } =
    credientials;

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
      duration: 4000,
    });

  const handleViewPassword = () => {
    setViewPassword(!viewpassword);
  };

  const handleChange = (e) => {
    setCredientials({ ...credientials, [e.target.name]: e.target.value });
  };

  const handleSign = async (e) => {
    e.preventDefault();

    try {
      e.target.classList.toggle("shimmer-btn");
      setIsloading(true);

      if (type === "sign-up") {
        if (password !== confirmPass) {
          handleError("Passwords do not match");
          return;
        }

        const { data } = await axios.post(
          "http://localhost:3000/signup",
          {
            email: email,
            password: password,
            username: username,
            walletBalance: walletBalance,
          },
          { withCredentials: true }
        );

        const { message, success } = data;
        if (success) {
          handleSuccess(message);
          setTimeout(() => {
            window.location.href = "http://localhost:5174";
          }, 1000);
        } else {
          handleError(message);
        }
      } else {
        const { data } = await axios.post(
          "http://localhost:3000/signin",
          {
            email: email,
            password: password,
          },
          { withCredentials: true }
        );

        const { message, success } = data;
        if (success) {
          handleSuccess(message);
          setTimeout(() => {
            window.location.href = "http://localhost:5174";
          }, 1000);
        } else {
          handleError(message);
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsloading(false);
      e.target.classList.toggle("shimmer-btn");
    }
  };

  return (
    <div style={{ width: "450px" }}>
      <Toaster />
      <div
        style={{
          padding: "15px",
          backgroundColor: "#e1e5e8",
          borderRadius: "15px 15px 0px 0px",
        }}
      >
        <h1
          className="text-center roboto-condensed-sign"
          style={{ color: "#0d6efd", margin: "0", lineHeight: "1" }}
        >
          {type === "sign-up" ? "Sign Up" : "Sign In"}
        </h1>
      </div>

      <div
        className="text-center"
        style={{
          paddingTop: "30px",
          border: "2px solid #e1e5e8",
          borderRadius: "0px 0px 15px 15px",
        }}
      >
        {/* Rest of your form inputs remain the same */}
        <input
          type="email"
          name="email"
          value={credientials.email}
          style={{
            width: "90%",
            border: "1px solid #e1e5e8",
            height: "40px",
            borderRadius: "5px",
            padding: "0 12px",
            fontSize: "16px",
            outline: "none",
            marginBottom: "30px",
            transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          }}
          placeholder="Email..."
          onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
          onBlur={(e) => (e.target.style.borderColor = "#e1e5e8")}
          onChange={handleChange}
        />

        <div></div>
        <div style={{ position: "relative", marginBottom: "30px" }}>
          <input
            type={viewpassword ? "text" : "password"}
            name="password"
            value={credientials.password}
            style={{
              width: "90%",
              border: "1px solid #e1e5e8",
              height: "40px",
              borderRadius: "5px",
              padding: "0px 45px 0px 12px",
              fontSize: "16px",
              outline: "none",
              transition: "border-color 0.3s ease, box-shadow 0.3s ease",
            }}
            placeholder={
              type === "sign-up" ? "Create Password..." : "Password..."
            }
            onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
            onBlur={(e) => (e.target.style.borderColor = "#e1e5e8")}
            onChange={handleChange}
          />
          <button
            style={{
              position: "absolute",
              right: "30px",
              top: "7px",
              border: "none",
              borderRadius: "10px",
            }}
            onClick={handleViewPassword}
          >
            {viewpassword ? (
              <i className="fa-solid fa-eye"></i>
            ) : (
              <i className="fa-solid fa-eye-slash"></i>
            )}
          </button>
        </div>

        {type === "sign-in" && (
          <a
            href="#"
            style={{
              textDecoration: "none",
              marginBottom: "20px",
              display: "inline-block",
              fontWeight: "600",
            }}
          >
            Forgot password?
          </a>
        )}

        {type === "sign-up" && (
          <>
            <div style={{ position: "relative", marginBottom: "30px" }}>
              <input
                type={viewpassword ? "text" : "password"}
                name="confirmPass"
                value={credientials.confirmPass}
                style={{
                  width: "90%",
                  border: "1px solid #e1e5e8",
                  height: "40px",
                  borderRadius: "5px",
                  padding: "0px 45px 0px 12px",
                  fontSize: "16px",
                  outline: "none",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                }}
                placeholder="Confirm Password..."
                onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                onBlur={(e) => (e.target.style.borderColor = "#e1e5e8")}
                onChange={handleChange}
              />
              <button
                style={{
                  position: "absolute",
                  right: "30px",
                  top: "7px",
                  border: "none",
                  borderRadius: "10px",
                }}
                onClick={handleViewPassword}
              >
                {viewpassword ? (
                  <i className="fa-solid fa-eye"></i>
                ) : (
                  <i className="fa-solid fa-eye-slash"></i>
                )}
              </button>
            </div>

            <input
              type="username"
              name="username"
              value={credientials.username}
              style={{
                width: "90%",
                border: "1px solid #e1e5e8",
                height: "40px",
                borderRadius: "5px",
                padding: "0 12px",
                fontSize: "16px",
                outline: "none",
                marginBottom: "30px",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              }}
              placeholder="Username..."
              onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
              onBlur={(e) => (e.target.style.borderColor = "#e1e5e8")}
              onChange={handleChange}
            />

            <input
              type="number"
              name="walletBalance"
              value={credientials.walletBalance}
              style={{
                width: "90%",
                border: "1px solid #e1e5e8",
                height: "40px",
                borderRadius: "5px",
                padding: "0 12px",
                fontSize: "16px",
                outline: "none",
                marginBottom: "30px",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              }}
              placeholder="Walletbalance..."
              onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
              onBlur={(e) => (e.target.style.borderColor = "#e1e5e8")}
              onChange={handleChange}
            />
          </>
        )}
        <div>
          <button
            className="btn btn-primary shimmer-btn"
            style={{
              width: "80%",
              marginBottom: "30px",
              position: "relative",
              overflow: "hidden",
            }}
            disabled={isLoading}
            onClick={handleSign}
          >
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                &nbsp; Loading...
              </>
            ) : type === "sign-in" ? (
              "sign In"
            ) : (
              "sign Up"
            )}
          </button>
        </div>
        <p>
          {type === "sign-up"
            ? "Already have an account?"
            : "Don't have an account?"}
          <Link
            to={type === "sign-up" ? "/sign-in" : "/sign-up"}
            style={{
              marginLeft: "5px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            {type === "sign-up" ? "Signin" : "Signup"}
          </Link>
        </p>

        <div className="centered-or-container text-muted">
          <div className="line" />
          <span className="or-text">OR</span>
          <div className="line" />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              width: "90%",
              height: "40px",
              background: "linear-gradient(to right, #1877F2,rgb(4, 70, 156))",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <i className="fab fa-facebook-f" style={{ color: "white" }}></i>
            <span style={{ color: "white", marginLeft: "10px" }}>
              Continue with Facebook
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              width: "90%",
              height: "40px",
              borderRadius: "5px",
              border: "2px solid #e1e5e8",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="media/Images/google.svg"
              alt="google"
              style={{ marginRight: "5px" }}
            />
            <p
              className="text-muted"
              style={{ margin: "0", fontWeight: "600" }}
            >
              Login with Google
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
