import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { validateEmail } from '../actions/validateEmail';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { emailValidSucess, history } = this.props;
    emailValidSucess(this.state);
    history.push('/carteira');
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  disableButton() {
    const { email, password } = this.state;
    const minPassword = 6;
    const validateEmailRegex = /\S+@\S+\.\S+/; // Código utilizado foi pego no site https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/

    if (password.length >= minPassword && validateEmailRegex.test(email)) {
      return true;
    }
    return false;
  }

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={ this.handleClick }>
        <label data-testid="text-input-label" htmlFor="Input-email">
          <input
            type="email"
            data-testid="email-input"
            id="Input-email"
            name="email"
            value={ email }
            onChange={ this.handleChangeEmail }
          />
        </label>

        <label htmlFor="Input-password">
          <input
            data-testid="password-input"
            type="password"
            id="Input-password"
            name="password"
            value={ password }
            onChange={ this.handleChangePassword }
          />
        </label>

        <button type="submit" disabled={ !this.disableButton() }>
          {' '}
          Entrar
          {' '}
        </button>

      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailValidSucess: (payload) => dispatch(validateEmail(payload)),
});

Login.propTypes = {
  emailValidSucess: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
