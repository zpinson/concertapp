import React from "react";
import image from "../images/MSG_SEA.jpg";

// const useStyles = () => {
//   root: {
//     height: 200
//     clear: "both"
//     paddingTop: 120
//     textAlign: "center"
//   }
//   image: {
//     backgroundImage: `url(${image})`
//   }
// };

function Jumbotron() {
  // useStyles();

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
