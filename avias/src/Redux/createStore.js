import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './currencyReducer'

export default configureStore({
    reducer: {
        root: currencyReducer
    }
  });