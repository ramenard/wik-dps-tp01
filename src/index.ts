import { createServer, IncomingMessage, ServerResponse } from "http";
import { hostname } from "os";

const url: string = '/ping'
const port = process.env.PING_LISTEN_PORT ? process.env.PING_LISTEN_PORT : 3000

createServer(function (req: IncomingMessage, res: ServerResponse) {
    if (req.method === 'GET' && req.url === url) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(req.headers));
    }else {
        res.writeHead(404, { "Content-Type": 'application/json' });
    }
    res.end();
}).listen(port, function () {
    console.log(`server listening on port ${port}, hostname: ${hostname}`);
});