import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <h4 data-testid="email-field">
            {`Email: ${email}`}
          </h4>
          <h4 data-testid="total-field">
            {`Despesa Total: ${0}`}
          </h4>
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
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
