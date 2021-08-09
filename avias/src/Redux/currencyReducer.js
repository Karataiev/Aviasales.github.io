import actionNames from "./actionNames";
import ticketList from '../Components/ticketList.json';

const getDefaultTickets = () => {
    const { tickets } = ticketList;
    return tickets.sort((a, b) => a.price > b.price ? 1 : -1);
}

const defaultState = {
    currency: "USD",
    tickets: [...getDefaultTickets()],
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
        default:
            return {...state};  
    }
}

export default currencyReducer;