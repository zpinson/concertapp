import React from "react";
import image from "../../images/MSG_SEA.jpg";

function Jumbotron() {
  return (
    <div
      style={{
        height: 200,
        clear: "both",
        paddingTop: 120,
        textAlign: "center",
      }}
      className="jumbotron jumbotron-fluid"
      component="img"
      image={image}
      title="Sea of MSG"
    ></div>
  );
}

export default Jumbotron;
