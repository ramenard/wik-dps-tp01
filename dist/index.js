"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const os_1 = require("os");
const url = '/ping';
const port = process.env.PING_LISTEN_PORT ? process.env.PING_LISTEN_PORT : 3000;
(0, http_1.createServer)(function (req, res) {
    if (req.method === 'GET' && req.url === url) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(req.headers));
        console.log(`hostname: ${os_1.hostname}`);
    }
    else {
        res.writeHead(404, { "Content-Type": 'application/json' });
    }
    res.end();
}).listen(port, function () {
    console.log(`server listening on port ${port}, hostname: ${os_1.hostname}`);
});
//# sourceMappingURL=index.js.map