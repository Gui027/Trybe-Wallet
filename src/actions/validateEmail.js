export const EMAIL_USER = 'EMAIL_USER';

export const validateEmail = (payload) => ({
  type: EMAIL_USER,
  payload,
});
