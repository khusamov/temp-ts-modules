"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
class Config {
    get _defaults() { return {}; }
    constructor(config) {
        for (let key in config) {
            if (_.isPlainObject(config[key])) {
                config[key] = new Config(config[key]);
            }
        }
        this._config = config;
    }
    get(name) {
        let value = this._config[name.split('.')[0]];
        if (value instanceof Config) {
            let names = name.split('.');
            names.shift();
            return value.get(names.join('.'));
        }
        else {
            return value;
        }
    }
}
exports.default = Config;
