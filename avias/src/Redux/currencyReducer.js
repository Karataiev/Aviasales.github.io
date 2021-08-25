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
            let symbol = state.exchangeSymbol;
        
            if (currencyName === "USD") {
                tickets = tickets.map((ticket) => ({...ticket, price: Math.trunc(ticket.price * state.exchangeRates.USD)}))
            }
            if (currencyName === "EUR") {
                tickets = tickets.map((ticket) => ({...ticket, price: Math.trunc(ticket.price * state.exchangeRates.EUR)}))
            }
            if (currencyName === "RUB") {
                tickets = tickets.map((ticket) => ({...ticket, price: ticket.price, symbol: state.exchangeSymbol}))
            }
            return {...state, currency: currencyName, tickets}
        
        case actionNames.FILTERS: 
            const { filterName } = action;
            const newFilters = state.filters.map((filter) => {
                if (filter.id === filterName) return {...filter, checked: !filter.checked};
                return {...filter}
            })
            const newTickets = [...getDefaultTickets()].filter(ticket => newFilters.find(filter => filter.id === ticket.stops).checked)
                return {...state, filters: newFilters, tickets: newTickets }
       
        case actionNames.EXCHANGE_RATES: 
            const { exchangeRates } = action;
            return {...state, exchangeRates}

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
