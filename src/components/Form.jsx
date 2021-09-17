import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      moedas: [],
    };
    this.handleChange = this.handleChange.bind(this);
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
      moedas: [...removeUSDT],
    });
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { moedas } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor
            <input type="text" name="valor" id="valor" />
          </label>
          <label htmlFor="descrição">
            Descrição
            <input type="text" name="descrição" id="descrição" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select name="moeda" id="moeda">
              {moedas.map((moeda) => (
                <option key={ moeda } value={ moeda } name="moeda">{ moeda }</option>
              ))}
            </select>
          </label>
          <label htmlFor="metodo">
            Método de pagamento
            <select name="metodo" id="metodo">
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select name="tag" id="tag">
              <option value="alimentação">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saúde">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
