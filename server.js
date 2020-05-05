const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
    // router = express.Router();
    // router.route("/api/book/save").get((req, res, next) => {
    //     console.log(req);
    // })
    // app.post("/api/book/save", (req, res) => {
    //   console.log(req.body.name);
    // })
    require("./routes/aipRoutes")(app)
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
