import React from 'react';

const FilterItem = ({checked, onClick, id, label, children}) => {

    return (
        <label>
            <div className="checkLi">
                <span>
                    <input className="one" type="checkbox" 
                        checked={checked} 
                        onChange={() => onClick(id)}
                    />
                </span>
                <span className="text">{label}</span>
                {children}
            </div>
        </label>
    )
}

export default FilterItem;