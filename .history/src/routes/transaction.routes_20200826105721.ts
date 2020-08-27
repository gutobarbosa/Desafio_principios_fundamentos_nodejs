import { Router } from 'express';
import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();
const transactionsRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  try {
    const transaction = transactionsRepository.all();
    const balance = transactionsRepository.getBalance();
    return response.json(transaction);

  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  const { title, value, type } = request.body;
  try {
    const transaction = transactionsRepository.create({ title, value, type });
    return response.json(transaction);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
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
