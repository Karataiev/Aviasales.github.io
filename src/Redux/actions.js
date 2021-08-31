import actionNames from "./actionNames";

export const currencyChangeAction = (currencyName, result) => ({
    type: actionNames.CURRENCY_CHANGE,
    currencyName,
    payload: result
});

export const getExchangeRates = (exchangeRates) => ({
    type: actionNames.EXCHANGE_RATES,
    exchangeRates
});

export const filterActions = (filterName) => ({
    type: actionNames.FILTERS,
    filterName
});

export const getOnlyFilter = (onlyFilter) => ({
    type: actionNames.ONLY_FILTER,
    onlyFilter
});

export const toggleCheckAll = (toggleCheckAllName) => ({
    type: actionNames.CHECK_ALL,
    toggleCheckAllName
});






