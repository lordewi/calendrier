const express = require("express");
const app = express();
const port = 3001;

const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World! testour2");
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from the API! tes2t" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
