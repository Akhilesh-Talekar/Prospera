import React from "react";
import AuthForm from "../AuthForm";

const SignIn = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <AuthForm type={"sign-in"} />
    </div>
  );
};

export default SignIn;
