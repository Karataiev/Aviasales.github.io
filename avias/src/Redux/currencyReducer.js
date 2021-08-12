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
        { id: "1", name: "name1", label: 'Без пересадок', checked: false },
        { id: "2", name: "name2",label: '1 пересадка',  checked: false },
        { id: "3", name: "name3",label: '2 пересадки',  checked: false },
        { id: "4", name: "name4",label: '3 пересадки',  checked: false }
    ],
    filterTickets: [
        {label: "Все", id:1, isChecked: false},
        {label: "Без пересадок", id:2, isChecked: false},
        {label: "1 пересадка", id:3, isChecked: false},
        {label: "2 пересадки", id:4, isChecked: false},
        {label: "3 пересадки", id:5, isChecked: false},
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
            if (toggleCheckAllName === 'All') {
                filtersAll = filtersAll.map((filter) => ({...filter, checked: !filter.checked}))
            }
            return {...state, filters: filtersAll, toggle: toggleCheckAllName }


        case 'CHECKED_TICKETS':
            if (action.id === 1) {
                if (state.filterTickets[0].isChecked === false) {
                    return state.filterTickets.map(el => ({...el, isChecked: true}))
                } else {
                    return state.filterTickets.map(el => ({...el, isChecked: false}))
                }
            }
            if (state[0].isChecked === false) {
                const index = state.filterTickets.findIndex((el) => el.id === action.id)
                const oldItem = state.filterTickets[index]
                const newItem = {...oldItem, isChecked: !oldItem.isChecked }
                return [...state.filterTickets.slice(0, index), newItem, ...state.filterTickets.slice(index + 1)]
            } else {
                const index = state.filterTickets.findIndex((el) => el.id === action.id)
                const oldItem = state.filterTickets[index]
                const allOldItem = state.filterTickets[0]
                const allNewItem = {...allOldItem, isChecked: false}
                const newItem = {...oldItem, isChecked: !oldItem.isChecked }
                return [allNewItem, ...state.filterTickets.slice(1, index), newItem, ...state.filterTickets.slice(index + 1)]
            }
            // const ticketsFilter = state.tickets.filter((ticket) => {
            //     return newFilters.some(filter => filter === ticket.stops)
            // });

        default:
            return {...state};  
    }
}

export default currencyReducer;
