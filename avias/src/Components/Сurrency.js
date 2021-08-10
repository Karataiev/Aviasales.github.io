import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currencyChangeAction, filterActions } from '../Redux/actions';
import store from '../Redux/createStore';
import FilterItem from './FilterItem';

store.subscribe(() => console.log(store.getState()))

function Сurrency({ state, toggleCheckbox, toggleCheckAll }) {

    const currency = useSelector(state => state.root.currency);
    const filters = useSelector(state => state.root.filters);
    const dispatch = useDispatch();
    return (
        <div className="currencyStyle">
            <span>ВАЛЮТА</span>
            <div className="btnCur">
                <button className="btn_1" onClick={() => { dispatch(currencyChangeAction('RUB')) }}>RUB</button>
                <button className="btn_2" onClick={() => { dispatch(currencyChangeAction('USD')) }}>USD</button>
                <button className="btn_3" onClick={() => { dispatch(currencyChangeAction('EUR')) }}>EUR</button>
            </div>
            <ul className="transfer">
                <span >КОЛИЧЕСТВО ПЕРЕСАДОК</span>
                {filters.map((filter) => (

                    <FilterItem {...filter} onClick={(id) => dispatch(filterActions(id))} />

                ))}
            </ul>
        </div>

    )
}

export default Сurrency;