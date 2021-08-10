import React from 'react';

const FilterItem = ({checked, name, onClick, id, label}) => {
    return (
        <li className="checkLi">
            <span>
                <input name="checkAll" type="checkbox" checked={checked} onClick={() => onClick(id)} />
            </span>
            <span className="text">{label}</span>
            <span className="text_2">ТОЛЬКО</span>
        </li>
    )
}

export default FilterItem;