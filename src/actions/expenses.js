export const SEND_EXPENSES = 'SEND_EXPENSES';
export const WALLET_DELL = 'WALLET_DELL';

export const sendExpenses = (payload) => ({
  type: SEND_EXPENSES,
  payload,
});

export const deleteExpense = (id) => ({
  type: WALLET_DELL,
  id,
});
