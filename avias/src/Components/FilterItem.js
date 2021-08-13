import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkedTickets } from '../Redux/actions'

const FilterItem = ({checked, onClick, id, label}) => {
    const dispatch = useDispatch();

    return (
        <>
        <div className="checkLi" key={id}>
            <span>
                <input className="one" type="checkbox" checked={checked} onChange={() => onClick(id)} onClick={() => {dispatch(checkedTickets(id)) }} />
            </span>
            <span className="text">{label}</span>
            <span className="text_2">ТОЛЬКО</span>
        </div>
        </>
    )
}

export default FilterItem;