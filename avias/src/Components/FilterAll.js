import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCheckAll } from '../Redux/actions'

function FilterAll ({id, checked, index}) {
        const dispatch = useDispatch();

    return (
       
        <div className="checkLiAll">
            <span>
                <input className="one" type="checkbox" checked={checked} onChange={() => {dispatch(toggleCheckAll(index))}}/>
            </span>
            <span className="text">Все</span>
            <span className="text_2">ТОЛЬКО</span>
        </div>
    )
}

export default FilterAll;