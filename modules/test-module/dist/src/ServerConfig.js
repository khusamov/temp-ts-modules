"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = require("./Config");
class ServerConfig extends Config_1.default {
    get _defaults() {
        return {
            port: process.env.PORT || 3000
        };
    }
}
exports.ServerConfig = ServerConfig;
exports.default = ServerConfig;
