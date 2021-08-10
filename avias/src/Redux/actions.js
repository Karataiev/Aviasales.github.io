import actionNames from "./actionNames";

export const currencyChangeAction = (currencyName) => ({
    type: actionNames.CURRENCY_CHANGE,
    currencyName
});


export const filterActions = (filterName) => ({
    type: actionNames.FILTERS,
    filterName
})

export const toggleCheckbox = (id) => ({
    type: "CHECKED",
    payload: {
      id,
    },
  });

export const toggleCheckAll = (checked) => ({
    type: "CHECK_ALL",
    payload: {
      checked,
    },
  });