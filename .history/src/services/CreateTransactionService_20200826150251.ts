import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(
    { title, value, type }: Request,
    { total }: Balance,
  ): Transaction {
    if (type === 'outcome' && total < value) {
      throw new Error ('Account balance unavailable');
    }
    const transactions = this.transactionsRepository.create({
      title,
      value,
      type,
    });
    return transactions;
  }
}

export default CreateTransactionService;
