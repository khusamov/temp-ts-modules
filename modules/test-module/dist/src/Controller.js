"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Middleware_1 = require("./Middleware");
class Controller extends Middleware_1.default {
    get middleware() {
        return this._middleware.bind(this);
    }
    _middleware(req, res, next) {
        let result = this.handler(req, res, next);
        if (!(result instanceof Promise)) {
            result = Promise.resolve(result);
        }
        result.then(result => {
            if (!result)
                throw new Error('Контроллер не вернул ответ.');
            res.send(result);
        }).catch(next);
    }
    handler(req, res, next) {
        return "В контроллере не задан обработчик.";
    }
}
exports.default = Controller;
