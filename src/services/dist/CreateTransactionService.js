"use strict";
exports.__esModule = true;
var CreateTransactionService = /** @class */ (function () {
    function CreateTransactionService(transactionsRepository) {
        this.transactionsRepository = transactionsRepository;
    }
    CreateTransactionService.prototype.execute = function (_a) {
        var title = _a.title, value = _a.value, type = _a.type;
        // eslint-disable-next-line no-constant-condition
        if (type !== 'income' && type !== 'outcome') {
            throw new Error('Invalid type use just income or outcome in type');
        }
        var total = this.transactionsRepository.getBalance().total;
        if (type === 'outcome' && total < value) {
            throw new Error('Account balance unavailable');
        }
        var transactions = this.transactionsRepository.create({
            title: title,
            value: value,
            type: type
        });
        return transactions;
    };
    return CreateTransactionService;
}());
exports["default"] = CreateTransactionService;
