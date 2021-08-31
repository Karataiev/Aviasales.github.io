import React from 'react';

const CurrencyButton = ({ className, onClick, label, name, selectedCurrency }) => {
    return(<button className={`${className} ${selectedCurrency === name? 'selected' : ''}`}
    onClick={() => onClick(name)} 
>
    {label}
</button>)
}

export default CurrencyButton;