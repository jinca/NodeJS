const http = require("http");
const hostname = "127.0.0.1";
const port = 8088;

const server = http.createServer((req, res) => {
    res.write("Hello World!");
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
