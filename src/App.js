"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// @ts-ignore
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var port = process.env.PORT || 3000;
var app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.post('/', function (req, res) {
    res.send('Hello World');
});
app.listen(port, function () {
    // tslint:disable-next-line:no-console
    console.log("Web service was started with port %s", port);
});
