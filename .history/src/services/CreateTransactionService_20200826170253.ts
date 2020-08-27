import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: Request): Transaction {
    const { total } = this.transactionsRepository.getBalance();
    if (type === 'outcome' && total < value) {
      throw new Error('Account balance unavailable');
    }

    if (type !== 'outcome' || 'income') {
      throw new Error('Values dont accepted use income or outcome');
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
