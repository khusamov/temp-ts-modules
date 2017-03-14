"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
//import * as Express from 'express';
const ServerConfig_1 = require("./ServerConfig");
class Server {
    constructor(app, config) {
        this._app = app;
        this._config = new ServerConfig_1.ServerConfig(config);
    }
    listen() {
        const port = this._config.get('port');
        this._app.set('port', port);
        const server = http.createServer(this._app.middleware);
        server.listen(port);
        return new Promise((resolve, reject) => {
            server.on('error', (error) => {
                if (error.syscall !== 'listen')
                    reject(error);
                switch (error.code) {
                    case 'EACCES':
                        reject(new Error('Port ' + port + ' requires elevated privileges'));
                        break;
                    case 'EADDRINUSE':
                        reject(new Error('Port ' + port + ' is already in use'));
                        break;
                    default:
                        reject(error);
                }
            });
            server.on('listening', none => {
                var addr = server.address();
                var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
                resolve(bind);
            });
        });
    }
}
exports.default = Server;
