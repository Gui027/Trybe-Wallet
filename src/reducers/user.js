// Esse reducer será responsável por tratar as informações da pessoa usuária
import { EMAIL_USER } from '../actions/validateEmail';

const ESTADO_INICIAL = {
  email: '',
  password: '',
};

const reducerUse = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
  case EMAIL_USER:
    return { ...state, ...action.payload };
  default:
    return state;
  }
};

export default reducerUse;
