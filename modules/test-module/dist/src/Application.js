"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const HttpMiddleware_1 = require("./HttpMiddleware");
class Application extends HttpMiddleware_1.default {
    constructor() {
        super();
        this._app = Express();
        this.init();
    }
    init() { }
    get middleware() {
        return this._app;
    }
    set(...args) {
        return this._app.set.apply(arguments);
    }
}
exports.default = Application;
