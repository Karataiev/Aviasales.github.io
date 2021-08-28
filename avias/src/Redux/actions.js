import actionNames from "./actionNames";

export const currencyChangeAction = (currencyName, result) => ({
    type: actionNames.CURRENCY_CHANGE,
    currencyName,
    payload: result
    
});

export const filterActions = (filterName) => ({
    type: actionNames.FILTERS,
    filterName
});

export const toggleCheckAll = (toggleCheckAllName) => ({
    type: actionNames.CHECK_ALL,
    toggleCheckAllName
});

export const checkedTickets = (ticketsName) => ({
    type: actionNames.CHECKED_TICKETS,
    ticketsName
});

export const someTickets = (someTicketsName) => ({
    type: actionNames.MY_TICKETS,
    someTicketsName
});

export const getExchangeRates = (exchangeRates) => ({
    type: actionNames.EXCHANGE_RATES,
    exchangeRates
});

export const getOnlyFilter = (onlyFilter) => ({
    type: actionNames.ONLY_FILTER,
    onlyFilter
});


