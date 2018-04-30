/*eslint-env node*/
var server = require("diet");
var wss = require("./websockets-server");
var app = server();
app.listen("http://localhost:8000");

// Require the diet-static module and configure it
var static = require("diet-static")({
  path: app.path + "/app"
});

app.view("file", static);

app.missing(function($) {
  $.redirect("/error.html");
});

app.get("/", function($) {
  //$.end("Hello World! Are you there?")
  $.redirect("index.html");
});
