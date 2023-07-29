//create express server
const app = require('express')();
const path = require("path");
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});









app.listen(80, () => {
    console.log("listening to port number 80");
});

