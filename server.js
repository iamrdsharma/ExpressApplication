var { response } = require("express");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("public"));
app.get("/index.html", (req, res) => {
  res.sendFile(__dirname + "/" + "index.html");
});
app.get("/process_get", (req, res) => {
  response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name,
  };
  console.log(response);
  res.end(JSON.stringify(response));
});
app.post("/process_post", urlencodedParser, (req, res) => {
  response = {
    country: req.body.country,
    gender: req.body.gender,
  };
  console.log(response);
  res.end(JSON.stringify(response));
});
// app.delete("/del_user", (req, res) => {
//   console.log("Got a DELETE request for the homepage");
//   res.send("Hello DELETE");
// });
// app.get("/list_user", (req, res) => {
//   console.log("Got a GET request for /list_user");
//   res.send("Page listing");
// });
// app.get("/ab*cd", (req, res) => {
//   console.log("Got a GET request for /ab*cd");
//   res.send("Page pattern match");
// });
var server = app.listen(3000, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log("The app is listening at http://%s:%s", host, port);
});
