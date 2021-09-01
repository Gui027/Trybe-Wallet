import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <label data-testid="text-input-label" htmlFor="Input-email">
          <input
            type="email"
            data-testid="email-input"
            id="Input-email"
          />
        </label>

        <label htmlFor="Input-password">
          <input
            data-testid="password-input"
            type="password"
            id="Input-password"
          />
        </label>

        <button type="button">Entrar</button>
      </form>
    );
  }
}

export default Login;
