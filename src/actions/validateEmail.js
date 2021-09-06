const EMAIL_USER = 'EMAIL_USER';

const validateEmail = (payload) => ({
  type: EMAIL_USER,
  payload,
});

export default validateEmail;
