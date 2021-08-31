import actionNames from "./actionNames";
import ticketList from '../Components/ticketList.json';

const getDefaultTickets = () => {
    let { tickets } = ticketList;
    return tickets.sort((a, b) => a.price > b.price ? 1 : -1);
}

const defaultState = {
    currency: "RUB",
    tickets: [...getDefaultTickets()],
    filters: [
        { id: 0, label: 'Без пересадок', checked: true },
        { id: 1, label: '1 пересадка',  checked: true },
        { id: 2, label: '2 пересадки',  checked: true },
        { id: 3, label: '3 пересадки',  checked: true }
    ],
    exchangeRates: {
        USD: 0.013612,
        EUR: 0.011612
    },
}

function currencyReducer (state = defaultState, action) {
    switch(action.type) {
        case actionNames.CURRENCY_CHANGE:
            const { currencyName } = action;
            let tickets = [...getDefaultTickets()];

            (currencyName === "USD") ? tickets = tickets.map((ticket) => ({...ticket, price: ~~(ticket.price * state.exchangeRates.USD)})) :
            (currencyName === "EUR") ? tickets = tickets.map((ticket) => ({...ticket, price: ~~(ticket.price * state.exchangeRates.EUR)})) :
            tickets = tickets.map((ticket) => ({...ticket, price: ticket.price}))

            return {...state, currency: currencyName, tickets}

        case actionNames.EXCHANGE_RATES: 
            const { exchangeRates } = action;
            return {...state, exchangeRates}

        case actionNames.FILTERS: 
            const { filterName } = action;
            const newFilters = state.filters.map((filter) => {
                if (filter.id === filterName) return {...filter, checked: !filter.checked};
                return {...filter}
            })
            const newTickets = [...getDefaultTickets()].filter((ticket) => newFilters.find(filter => filter.id === ticket.stops).checked)
                return {...state, filters: newFilters, tickets: newTickets }
       
        case actionNames.ONLY_FILTER:
            const { onlyFilter } = action;
            let onlyChecked = state.filters;
            onlyChecked = onlyChecked.map((filter) => ({...filter, checked: onlyFilter === filter.id}))
            
            const newTickets_2 = [...getDefaultTickets()].filter((ticket) => onlyChecked.find(filter => filter.id === ticket.stops).checked)
                return {...state, filters: onlyChecked, tickets: newTickets_2 }
        
        case actionNames.CHECK_ALL:
            const { toggleCheckAllName } = action;
            let allChecked = state.filters;
            if (toggleCheckAllName === 'All') {
               allChecked = allChecked.map((filter) => ({...filter, checked: !allChecked.checked}))
            }
            return {...state, filters: allChecked, tickets: [...defaultState.tickets]}

        default:
            return {...state};  
    }
}

export default currencyReducer;
