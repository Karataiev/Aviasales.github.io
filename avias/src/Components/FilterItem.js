import React from 'react';
import { useDispatch } from 'react-redux';
import { checkedTickets } from '../Redux/actions';
import { getOnlyFilter } from '../Redux/actions';

const FilterItem = ({checked, onClick, id, label}) => {
    const dispatch = useDispatch();

    return (
        <label>
        <div className="checkLi" key={id}>
            <span>
                <input className="one" type="checkbox" checked={checked} onChange={() =>{dispatch(checkedTickets(id))}} onClick={() => onClick(id)}/>
            </span>
            <span className="text">{label}</span>
            <button className="text_2" onClick={() =>{dispatch(getOnlyFilter((id)))}}>ТОЛЬКО</button>
        </div>
        </label>
    )
}

export default FilterItem;