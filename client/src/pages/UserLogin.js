import React, { Component } from "react";
import Login from "../components/Login";
import Jumbotron from "../components/Jumbotron"

function UserLogin() {
  return (
    <div>
    <Jumbotron />
      <Login />
      Not a user? 
      <a href="/signup">Sign up instead</a>
    </div>
  );
}

export default UserLogin;
