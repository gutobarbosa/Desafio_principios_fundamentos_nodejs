import { Router } from 'express';
import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();
const transactionsRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  try {
    // TODO
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  const { title, value, type } = request.body;
  return response.json({ message: 'Hello World' });
});

export default transactionRouter;

/**
 *  try {
    const { title, value, type } = request.body;

    const transaction = createTransaction.execute();
    return response.json(transaction);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
 */
