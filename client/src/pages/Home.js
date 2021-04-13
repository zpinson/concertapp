import React, { Component } from "react";
import MainNav from "../components/MainNav";
import HomeSearch from "../components/HomeSearch";

function Home() {
  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };
    return (
      <div>
        <MainNav />
        <HomeSearch />
      </div>
    );
}

export default Home;
