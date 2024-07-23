const express = require('express')
const app = express()
const port = 3000;
const path = require('path');
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const links = [
    { href: "/", text: "Home" },
    { href: "about", text: "About" },
];

app.get("/", (req, res) => {
    res.render("index", { links: links });
});
app.get("/about", (req, res) => {
    res.render("about", { links: links });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})