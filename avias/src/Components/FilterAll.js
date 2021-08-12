import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCheckAll } from '../Redux/actions'

function FilterAll () {
        const dispatch = useDispatch();

    return (
       
        <div className="checkLiAll">
            <span>
                <input className="one" type="checkbox" onClick={() => {dispatch(toggleCheckAll('All'))}}/>
            </span>
            <span className="text">Все</span>
            <span className="text_2">ТОЛЬКО</span>
        </div>
    )
}

export default FilterAll;