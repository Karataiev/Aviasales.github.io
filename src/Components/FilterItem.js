import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCheckAll } from '../Redux/actions'

const FilterItem = ({checked, onClick, id, label, children}) => {
    const dispatch = useDispatch();
    
    return (
        <label>
            <div className="checkLi">
                <span>
                    <input className="one" type="checkbox" 
                        checked={checked} 
                        onChange={() =>  label ==='Все' ? dispatch(toggleCheckAll('All')) : onClick(id)}
                    />
                </span>
                <span className="text">{label}</span>
                {children}
            </div>
        </label>
    )
}

export default FilterItem;