// Esse reducer será responsável por tratar as informações da pessoa usuária

const ESTADO_INICIAL = {
  email: '',
};

const reducerUse = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
  case 'LOGIN':
    return { email: action.state };
  default:
    return state;
  }
};

export default reducerUse;
