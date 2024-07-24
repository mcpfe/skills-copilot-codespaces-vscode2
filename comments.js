// Create web server
// 1. Create a server
// 2. Create the URL
// 3. Create the response
// 4. Listen to the port
// 5. Create the response
// 6. Send the response

// 1. Create a server
const http = require('http');

// 2. Create the URL
const url = require('url');

// 3. Create the response
const fs = require('fs');

// 4. Listen to the port
const port = 8000;

// 5. Create the response
const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  const filename = `.${q.pathname}