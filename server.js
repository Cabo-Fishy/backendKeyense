const express = require("express");
const cors = require("cors");
const app = express();

// var corsOptions = {
//   origin: "http://localhost:4200"
// };
// app.use(cors(corsOptions));
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const db = require("./src/models");
global.__basedir = __dirname;

require("./src/routes/nservice.routes")(app);

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
  
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});