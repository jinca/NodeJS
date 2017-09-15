const http = require("http");
const port = 8800;
const fs = require('fs');
const hostname = "127.0.0.1";
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.writeHead(200,{"Content-Type": "text/html"});
    fs.readFile('./index.html',(error,content) => {
        res.write(content);
	res.end();
    });
});

server.listen(port, hostname, () => {
    console.log("Server running at "+`http://${hostname}:${port}/`);
});
