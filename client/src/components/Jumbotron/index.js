import React from "react";
import image from "../../images/MSG_SEA.jpg";

function Jumbotron() {
  return (
    <div
      style={{
        height: 300,
        clear: "both",
        paddingTop: 120,
        textAlign: "center",
      }}
      className="jumbotron"
      component="img"
      image={image}
      title="Sea of MSG"
    ></div>
  );
}

export default Jumbotron;
