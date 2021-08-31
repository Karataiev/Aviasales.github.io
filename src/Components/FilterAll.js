import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCheckAll } from '../Redux/actions'

const FilterAll = ({checked}) => {
    const dispatch = useDispatch();

    return (
       <label>
            <div className="checkLiAll">
                <span>
                    <input className="one" type="checkbox" 
                        checked={checked} 
                        onChange={() => {dispatch(toggleCheckAll('All'))}}
                    />
                </span>
                <span className="text">Все</span>
            </div> 
       </label>
    )
}

export default FilterAll;