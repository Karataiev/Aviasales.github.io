import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currencyChangeAction, filterActions, getExchangeRates, getOnlyFilter } from '../Redux/actions';
import FilterItem from './FilterItem';
import CurrencyButton from './CurrencyButton';

function Currency() {

    const filters = useSelector(state => state.root.filters);
    const currency = useSelector(state => state.root.currency);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("https://www.cbr-xml-daily.ru/latest.js")
        .then((res) => res.json())
        .then(
            (result) => {
                dispatch(getExchangeRates({...result.rates, RUB:1}));
            }
        )
    }, []);

    const onClickCurrencyBtn = (name) => {
        dispatch(currencyChangeAction(name))
    };

    const currencyButtons = [
        {className: `btn_1`, onClick: onClickCurrencyBtn, label: 'RUB', name: 'RUB', id: 1},
        {className: `btn_2`, onClick: onClickCurrencyBtn, label: 'USD', name: 'USD', id: 2},
        {className: `btn_3`, onClick: onClickCurrencyBtn, label: 'EUR', name: 'EUR', id: 3}
    ]

    return (
        <div className="currencyStyle">
            <span>ВАЛЮТА</span>
            <div className="btnCur">
                {currencyButtons.map((button) => (
                <CurrencyButton key={button.id} {...button} selectedCurrency={currency}/>
                ))}
            </div>
            <ul className="transfer">
                <span >КОЛИЧЕСТВО ПЕРЕСАДОК</span>
                <FilterItem label='Все' checked={filters.every(filter => filter.checked)}/>
                {filters.map((filter) => (
                    <FilterItem key={filter.id} {...filter} onClick={(id) => dispatch(filterActions(id))}>
                        <button className="text_2" onClick={() =>{dispatch(getOnlyFilter(filter.id))}}>ТОЛЬКО</button>
                    </FilterItem>
                ))}
            </ul>
        </div>
    )
}

export default Currency;
