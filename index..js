//create express server
const express = require("express");
const app = express();
const path = require("path");
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));
const comments = [
    { username: "prince", tweet: "hey buddy this is it" },
    { username: "sunny", tweet: "yes brother we did it" },
    { username: "suryansh", tweet: "let's make this world a better place" }
];
app.get("/tweets", (req, res) => {
    res.render("tweets/index.ejs", { comments });
});

app.get("/tweets/new", (req, res) => {
    res.render("tweets/new.ejs");
});

app.post("/tweets", (req, res) => {
    const { username, tweet } = req.body;
    comments.push({ username, tweet });
    res.send("it worked");
});


/*
app.get("/tacos", (req, res) => {
    res.send("get request");
});
app.post("/tacos", (req, res) => {
    const username = req.body.username;
    const tweet = req.body.tweet;
    res.send(` worked and the values are ${username} and ${tweet} `);
});
*/
app.listen(80, () => {
    console.log("listening to port number 80");
});

