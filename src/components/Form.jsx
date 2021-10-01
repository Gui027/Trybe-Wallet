import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendExpenses } from '../actions/expenses';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      moedas: [],
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: '',
      currenciesKeys: [],
      exchangeRates: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getApi();
  }

  async getApi() {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const fecthApi = await fetch(url);
    const getJson = await fecthApi.json();
    const getMoedas = Object.keys(getJson);

    const removeUSDT = getMoedas.filter((target) => target !== 'USDT');

    this.setState({
      currenciesKeys: [...removeUSDT],
    });
  }

  async handleSubmit() {
    // const link = 'https://economia.awesomeapi.com.br/json/all';
    // const Data = await fetch(link);
    // const rJson = await Data.json();
    // this.setState({
    //   exchangeRates: rJson,
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const responseJson = await response.json();
    this.setState({
      exchangeRates: responseJson,
    });
    const { dispatchCurrenciesKeys } = this.props;
    dispatchCurrenciesKeys(this.state);
    console.log(this.state);
    this.setState((prevState) => ({
      value: 0,
      id: prevState.id + 1,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    }));
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({ [id]: value });
  }

  buttonAddDispesa() {
    return (
      <span>
        <button
          onClick={ this.handleSubmit }
          type="button"
        >
          Adicionar despesa
        </button>
      </span>
    );
  }

  labelMethod() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          id="method"
          value={ method }
          name="method"
          onChange={ this.handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  inputLabel() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select name="tag" value={ tag } id="tag" onChange={ this.handleChange }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { loadin } = this.props;
    if (loadin) {
      return (<span>Carregando...</span>);
    }
    const { currenciesKeys, currency, value, description } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor
            <input
              type="text"
              id="value"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              type="text"
              id="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="currency">
            Moeda
            <select
              id="currency"
              value={ currency }
              name="currency"
              onChange={ this.handleChange }
            >
              {currenciesKeys.map((moeda, index) => (
                <option key={ index }>
                  { moeda }
                </option>))}
            </select>
          </label>
          { this.labelMethod() }
          { this.inputLabel() }
          { this.buttonAddDispesa() }
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  dispatchCurrenciesKeys: PropTypes.string.isRequired,
  loadin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loadin: state.wallet.loadin,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrenciesKeys: (info) => dispatch(sendExpenses(info)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
