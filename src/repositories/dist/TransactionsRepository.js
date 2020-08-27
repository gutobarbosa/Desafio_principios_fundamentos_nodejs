"use strict";
exports.__esModule = true;
var Transaction_1 = require("../models/Transaction");
var TransactionsRepository = /** @class */ (function () {
    function TransactionsRepository() {
        this.transactions = [];
    }
    TransactionsRepository.prototype.all = function () {
        return this.transactions;
    };
    TransactionsRepository.prototype.getBalance = function () {
        var income = this.transactions
            .map(function (transaction) {
            if (transaction.type === 'income') {
                return transaction.value;
            }
            return 0;
        })
            .reduce(function (accumulator, actually) {
            return accumulator + actually;
        }, 0);
        var outcome = this.transactions
            .map(function (transaction) {
            if (transaction.type === 'outcome') {
                return transaction.value;
            }
            return 0;
        })
            .reduce(function (accumulator, actually) {
            return accumulator + actually;
        }, 0);
        var total = income - outcome;
        var balance = { income: income, outcome: outcome, total: total };
        return balance;
    };
    TransactionsRepository.prototype.create = function (_a) {
        var title = _a.title, value = _a.value, type = _a.type;
        var transaction = new Transaction_1["default"]({ title: title, value: value, type: type });
        this.transactions.push(transaction);
        return transaction;
    };
    return TransactionsRepository;
}());
exports["default"] = TransactionsRepository;
