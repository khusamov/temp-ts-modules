"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Middleware_1 = require("./Middleware");
class HttpMiddleware extends Middleware_1.default {
    /**
     * app.use([path,] callback [, callback...])
     * callback: Function | Application | Router
     */
    use(...args) {
        args = this._prepareMiddlewares(args);
        return this.middleware.use.apply(args);
    }
    get(...args) {
        args = this._prepareMiddlewares(args);
        return this.middleware.get.apply(args);
    }
    _prepareMiddlewares(args) {
        return args.map(item => item instanceof Middleware_1.default ? item.middleware : item);
    }
}
exports.default = HttpMiddleware;
