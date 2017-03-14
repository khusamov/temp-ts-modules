"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const HttpMiddleware_1 = require("./HttpMiddleware");
class Router extends HttpMiddleware_1.default {
    constructor() {
        super();
        this._router = Express.Router();
        this.init();
    }
    init() { }
    get middleware() {
        return this._router;
    }
}
exports.default = Router;
