import { createStore } from 'redux';
import currencyReducer from './currencyReducer'
import Tickets from '../Components/Tickets';
import initialState from './initialState';

const store = createStore(currencyReducer, 1)

export default store;