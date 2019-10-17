const express = require("express");
const app = express();

app.get("/hello", (request, response) => {
  response.send("hello there");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
