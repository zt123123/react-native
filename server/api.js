var http = require("http")
var url = require('url');
var fs = require('fs');
var util = require('util');

http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "*")
    res.setHeader("Content-Type", "application/json;charset=utf-8")

res.end(fs.readFileSync("api.json"))


}).listen(3000, () => {
    console.log("server statrt")
})