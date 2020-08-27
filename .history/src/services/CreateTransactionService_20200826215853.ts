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
    // eslint-disable-next-line no-constant-condition
    if (type !== 'income' && type !== 'outcome') {
      throw new Error('Invalid type use just income or outcome in type');
    }
    const { total } = this.transactionsRepository.getBalance();
    if (type === 'outcome' && total < value) {
      throw new Error('Account balance unavailable');
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
