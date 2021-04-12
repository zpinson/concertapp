import React, { Component } from "react";
import Signup from "../components/Signup";
import Jumbotron from "../components/Jumbotron";

function UserSignup() {
  return (
    <div>
      <Jumbotron />
      <Signup />
      Already a user?
      <a href="/login">Log in instead</a>
    </div>
  );
}

export default UserSignup;
