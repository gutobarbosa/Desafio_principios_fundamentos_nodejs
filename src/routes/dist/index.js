"use strict";
exports.__esModule = true;
var express_1 = require("express");
var transaction_routes_1 = require("./transaction.routes");
var routes = express_1.Router();
routes.use('/transactions', transaction_routes_1["default"]);
exports["default"] = routes;
