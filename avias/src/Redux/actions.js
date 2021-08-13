import actionNames from "./actionNames";

export const currencyChangeAction = (currencyName) => ({
    type: actionNames.CURRENCY_CHANGE,
    currencyName
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