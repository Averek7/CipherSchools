const express = require("express");
const cors = require("cors");

const connectToMongo = require("./db");

const port = 8000;
const app = express();
app.use(cors());
app.use(express.json());

connectToMongo();

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello There !");
});
