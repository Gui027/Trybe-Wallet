const ESTADO_INICIAL_EMAIL = {
  emailUser: '',
};

const validateEmailReducer = (state = ESTADO_INICIAL_EMAIL, action) => {
  switch (action.type) {
  case 'EMAIL_USER':
    return {
      ...state, emailUser: action.payload.emailUser,
    };
  default:
    return state;
  }
};
export default validateEmailReducer;
