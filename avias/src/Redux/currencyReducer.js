function currencyReducer (state, action) {
    if (action.type === "USD") {
        return (state / 73)
    } else if (action.type === "EUR") {
        return (state / 86)
    } else if (action.type === "RUB") {
        return state
    }
    return state
}

export default currencyReducer;