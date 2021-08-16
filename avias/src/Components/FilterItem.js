import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkedTickets, someTickets } from '../Redux/actions';

const FilterItem = ({checked, onClick, id, label}) => {
    const dispatch = useDispatch();

    return (
        <>
        <label>
        <div className="checkLi" key={id}>
            <span>
                <input className="one" type="checkbox" checked={checked} onChange={() =>{dispatch(checkedTickets(id))}} onClick={() => onClick(id)}/>
            </span>
            <span className="text">{label}</span>
            <span className="text_2">ТОЛЬКО</span>
        </div>
        </label>
        </>
    )
}

export default FilterItem;