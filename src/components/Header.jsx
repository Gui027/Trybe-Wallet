import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.sumExpenses = this.sumExpenses.bind(this);
  }

  sumExpenses() {
    const { expenses } = this.props;
    const sum = expenses.reduce((acc, { value, currency, exchangeRates }) => {
      acc += Number(value) * Number(exchangeRates[currency].ask);
      return acc;
    }, 0);
    return sum.toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <h4 data-testid="email-field">
            {`Email: ${email}`}
          </h4>
          <span> Valor Total de Gastos: R$ =  </span>
          <span data-testid="total-field">
            { this.sumExpenses() }
          </span>
          <h4 data-testid="header-currency-field">
            Câmbio: BRL
          </h4>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Header);
