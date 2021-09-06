import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import validateEmail from '../actions/validateEmail';

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
      <form>
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

        <Link to="/carteira">
          <button type="button" disabled={ !this.disableButton() }>Entrar</button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  validateEmail: (value) => dispatch(validateEmail(value)),
});

export default connect(null, mapDispatchToProps)(Login);
