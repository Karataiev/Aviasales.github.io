import actionNames from "./actionNames";
import ticketList from '../Components/ticketList.json';
import { filterActions } from "./actions";

const getDefaultTickets = () => {
    const { tickets } = ticketList;
    return tickets.sort((a, b) => a.price > b.price ? 1 : -1);
}

let defaultState = {
    currency: "USD",
    tickets: [...getDefaultTickets()],
    filters: [
        { id: "All", name: "all", label: 'Без пересадок', checked: false },
        { id: "1", name: "name1", label: '1 пересадка', checked: false },
        { id: "2", name: "name2",label: '2 пересадка',  checked: false },
        { id: "3", name: "name3",label: '3 пересадка',  checked: true },
        { id: "4", name: "name4",label: '4 пересадка',  checked: true }
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
            
            // function changeFilter (id) {
            //     defaultState.filters = defaultState.filters.map(item => {
            //         if(item.id === id) {
            //             item.completed = !item.completed
            //         }
            //         return item
            //     })
            // }

            // const ticketsFilter = state.tickets.filter((ticket) => {
            //     return newFilters.some(filter => filter === ticket.stops)
            // });

            return {...state, filters: newFilters}
        
        default:
            return {...state};  
    }
}

export default currencyReducer;