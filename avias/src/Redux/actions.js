import actionNames from "./actionNames";

export const currencyChangeAction = (currencyName) => ({
    type: actionNames.CURRENCY_CHANGE,
    currencyName
})
