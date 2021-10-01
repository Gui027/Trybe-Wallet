// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { SEND_EXPENSES, WALLET_DELL } from '../actions/expenses';

const ESTADO_INICIAL = {
  password: '',
  expenses: [],
  loadin: false,
  erro: '',
};

const wallet = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
  // case 'LOGIN':
  //   return { password: action.state };
  case SEND_EXPENSES:
    return { ...state,
      expenses: [...state.expenses, {
        id: action.payload.id,
        value: action.payload.value,
        description: action.payload.description,
        currency: action.payload.currency,
        method: action.payload.method,
        tag: action.payload.tag,
        exchangeRates: action.payload.exchangeRates,
      }],
    };
  case WALLET_DELL:
    return {
      ...state,
      expenses:
    state.expenses.filter((expense) => expense.id !== action.id),
    };
  default:
    return state;
  }
};

export default wallet;
