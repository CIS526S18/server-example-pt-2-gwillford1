"use strict";

//PORT definition
const PORT = 1956;

//Import the HTTP library.
const http = require('http');

//Import the fs library
const fs=require('fs');

function handleRequest(req, res){

    switch(req.url){
        case '/':
        case 'openhouse.html':
            res.end(fs.readFileSync('./openhouse.html'));
        break;
        case '/openhouse.css':
            res.end(fs.readFileSync('./openhouse.css'));
            break;
        case '/openhouse.js':
            res.end(fs.readFileSync('./openhouse.js'));
            break;
        default:
            res.statusCode = 404;
            res.end("file not found");
    }
}

//Create the web server
var server = http.createServer(handleRequest);

//Start listening on port 80
server.listen(PORT, function() {
    console.log("Listening on port 1956");
});