const express = require("express");
const app = express();

app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.render("homepage");
});

app.listen(3000, () => {
    console.log("Listening on http://localhost:3000");
});
