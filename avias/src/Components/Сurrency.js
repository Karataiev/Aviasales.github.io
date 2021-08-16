import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currencyChangeAction, filterActions } from '../Redux/actions';
import FilterItem from './FilterItem';
import FilterAll from './FilterAll'

function Сurrency({id}) {

    const filters = useSelector(state => state.root.filters);
    const dispatch = useDispatch();
    return (
        <div className="currencyStyle" key={id}>
            <span>ВАЛЮТА</span>
            <div className="btnCur">
                <button className="btn_1" onClick={() => { dispatch(currencyChangeAction('RUB'))}}>RUB</button>
                <button className="btn_2" onClick={() => { dispatch(currencyChangeAction('USD'))}}>USD</button>
                <button className="btn_3" onClick={() => { dispatch(currencyChangeAction('EUR'))}}>EUR</button>
            </div>
            <ul className="transfer">
                <span >КОЛИЧЕСТВО ПЕРЕСАДОК</span>
                <FilterAll checked={filters.every(filter => filter.checked)}/>
                {filters.map((filter) => (
                    <FilterItem key={id} {...filter} onClick={(id) => dispatch(filterActions(id))} />
                ))}
            </ul>
        </div>
    )
}

export default Сurrency;