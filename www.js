const fs = require("fs");
const path = require("path");
const https = require("https")

auto(["/robots.txt", "/manifest.json", "/css/(.*)", "/img/(.*)", "/js/(.*)"])

get("/", (req, res) => {
    res.status(200);
    res.ejs("views/index.ejs")
})