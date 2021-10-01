import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../actions/expenses';

class Table extends React.Component {
  constructor() {
    super();
    this.funcTable = this.funcTable.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  funcTable() {
    const tableHeader = [
      'Descrição', 'Tag', 'Método de pagamento', 'Valor',
      'Moeda', 'Câmbio utilizado', 'Valor convertido',
      'Moeda de conversão', 'Editar/Excluir',
    ];

    return (
      <div>
        <table>
          <thead>
            <tr>
              {tableHeader.map((header) => <th key={ header }>{ header }</th>)}
            </tr>
          </thead>
        </table>
      </div>
    );
  }

  handleClick({ target }) {
    const { dell } = this.props;
    const expenseDell = parseInt(target.name, 10);
    dell(expenseDell);
  }

  render() {
    const { expensesAll } = this.props;
    return (
      <div>
        <div>{this.funcTable()}</div>
        {expensesAll.map((expense) => {
          const { id, description, tag, method, value,
            exchangeRates, currency } = expense;
          return (
            <table key={ id }>
              <tbody>
                <tr key={ id }>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{value}</td>
                  <td>{exchangeRates[currency].name.split('/')[0]}</td>
                  <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                  <td>
                    {Number(exchangeRates[currency].ask * value).toFixed(2)}
                  </td>
                  <td>Real</td>
                  <td>
                    <button
                      type="button"
                      id="dlt"
                      name={ id }
                      data-testid="delete-btn"
                      onClick={ this.handleClick }
                    >
                      Deletar
                    </button>
                    {/* { this.buttonDell() } */}
                  </td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  expensesAll: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dell: (expenseDell) => dispatch(deleteExpense(expenseDell)),
});

Table.propTypes = {
  expensesAll: PropTypes.func.isRequired,
  dell: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
