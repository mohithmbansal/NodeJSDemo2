console.log("Test")


const express = require("express");
const app = express();

/* sample Demo App
*/
app.get("/", function (req, res) {
  res.send("Hello world! Cloud Foudnry Node Js Demo");
});

const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("app listening at port " + port);
});
