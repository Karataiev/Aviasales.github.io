import React from 'react';

const FilterItem = ({checked, onClick, id, label}) => {
    
    return (
        <>
        <div className="checkLi" key={id}>
            <span>
                <input className="one" type="checkbox" checked={checked} onChange={() => onClick(id)} />
            </span>
            <span className="text">{label}</span>
            <span className="text_2">ТОЛЬКО</span>
        </div>
        </>
    )
}

export default FilterItem;