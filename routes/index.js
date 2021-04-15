const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
// if (process.env.NODE_ENV === 'production'){
router.use((req, res) =>{
  console.log("router.use req.url: ", req.url)
   res.sendFile(path.join(__dirname, "../client/build/index.html"))
}

 
);

// }

module.exports = router;
