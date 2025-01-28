import React from "react";
import AuthForm from "../AuthForm";

const SignUp = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center resp"
    >
      <AuthForm type={"sign-up"} />
    </div>
  );
};

export default SignUp;
