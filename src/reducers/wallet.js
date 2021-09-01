// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const ESTADO_INICIAL = {
  password: '',
};

const wallet = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
  case 'LOGIN':
    return { password: action.state };
  default:
    return state;
  }
};

export default wallet;
