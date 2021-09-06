import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';
import emailUser from './emailUser';

const rootReducer = combineReducers({ user, wallet, emailUser });

export default rootReducer;
// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
