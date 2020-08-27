import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransaction {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const income = this.transactions
      .map((transaction): number => {
        if (transaction.type === 'income') {
          return transaction.value;
        } else {
          return 0;
        }
      })
      .reduce(function (acumulador, valorAtual) {
        return acumulador + valorAtual;
      }, 0);

    const outcome = this.transactions
      .map((transaction): number => {
        if (transaction.type === 'outcome') {
          return transaction.value;
        } else {
          return 0;
        }
      })
      .reduce(function (acumulador, valorAtual) {
        return acumulador + valorAtual;
      }, 0);

    const total = income - outcome;

    const balance = { income, outcome, total };

    return balance;
  }

  public create({ title, value, type }: CreateTransaction): Transaction {
    const transaction = new Transaction({ title, value, type });
    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
