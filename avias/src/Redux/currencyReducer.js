import actionNames from "./actionNames";
import ticketList from '../Components/ticketList.json';

const getDefaultTickets = () => {
    const { tickets } = ticketList;
    return tickets.sort((a, b) => a.price > b.price ? 1 : -1);
}

let defaultState = {
    currency: "USD",
    tickets: [...getDefaultTickets()],
    filters: [
        { id: 1, label: 'Без пересадок', checked: false },
        { id: 2, label: '1 пересадка',  checked: false },
        { id: 3, label: '2 пересадки',  checked: false },
        { id: 4, label: '3 пересадки',  checked: false }
    ],
    filterAll: [
        { id: 5, checked: false }
    ]
}

function currencyReducer (state = defaultState, action) {
    console.log('REDUCER', state, action);
    switch(action.type) {
        case actionNames.CURRENCY_CHANGE:
            const { currencyName } = action;
            let tickets = [...getDefaultTickets()];
            if (currencyName === "USD") {
                tickets = tickets.map((ticket) => ({...ticket, price: Math.trunc(ticket.price / 76)}))
            } else if (currencyName === "EUR") {
                tickets = tickets.map((ticket) => ({...ticket, price: Math.trunc(ticket.price / 86)}))
            }
            return {...state, currency: currencyName, tickets }
        
        case actionNames.FILTERS: 
            const { filterName } = action;
            const newFilters = state.filters.map((filter) => {
                if (filter.id === filterName) return {...filter, checked: !filter.checked};
                return {...filter}
            })
                return {...state, filters: newFilters}

        case actionNames.CHECK_ALL:
            const { toggleCheckAllName } = action;
            let filtersAll = state.filters;
            let filterHead = state.filterAll
            if (toggleCheckAllName === filterHead.id) {
               filtersAll = filtersAll.map((filter) => ({...filter, checked: !filter.checked}))
            }
            return {...state, filters: filtersAll, toggle: toggleCheckAllName }
            
        case actionNames.CHECKED_TICKETS:
            const { checkedTickets } = action;
            let ticketsFilter = [...getDefaultTickets()];
            let filtersAll_1 = state.filters;
            if (checkedTickets === filtersAll_1[0]) {
                ticketsFilter = ticketsFilter.map((tick) => ({...tick.filter(ticketsFilter.stops === 0)}))
            }
            return {...state, tickets: ticketsFilter }

        default:
            return {...state};  
    }
}

export default currencyReducer;

    // if (filterHead.checked === false) {
    //                 return filterHead.map(el => ({...el, checked: true}))
    //             } else {
    //                 return filterHead.map(el => ({...el, checked: false}))
    //             }
    //           }
    //             if (filterHead.checked === false) {
    //                 const index = filtersAll.findIndex((el) => el.id === action.id)
    //                 const oldItem = filtersAll[index]
    //                 const newItem = {...oldItem, checked: !oldItem.checked }
    //                 return [...filtersAll.slice(0, index), newItem, ...filtersAll.slice(index + 1)]
    //             } else {
    //                 const index = filtersAll.findIndex((el) => el.id === action.id)
    //                 const oldItem = filtersAll[index]
    //                 const allOldItem = filterHead[0]
    //                 const allNewItem = {...allOldItem, checked: false}
    //                 const newItem = {...oldItem, checked: !oldItem.checked }
    //                 return [allNewItem, ...filtersAll.slice(1, index), newItem, ...filtersAll.slice(index + 1)]
    //             }
            