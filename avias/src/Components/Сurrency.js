import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currencyChangeAction, filterActions } from '../Redux/actions';
import FilterItem from './FilterItem';
import FilterAll from './FilterAll'
import {useState} from 'react'

function Сurrency({id}) {

    const [colorBtn_1,setColor_1]= useState("rgb(0, 110, 255)");
    const [colorText_1,setColorText_1]= useState("white");

    const [colorBtn_2,setColor_2]= useState("white");
    const [colorText_2,setColorText_2]= useState("rgb(0, 110, 255)");

    const [colorBtn_3,setColor_3]= useState("white");
    const [colorText_3,setColorText_3]= useState("rgb(0, 110, 255)");



    const filters = useSelector(state => state.root.filters);
    const dispatch = useDispatch();
    return (
        <div className="currencyStyle" key={id}>
            <span>ВАЛЮТА</span>
            <div className="btnCur">
                <button className="btn_1" 
                    onClick={() => {dispatch(currencyChangeAction('RUB')); 
                    setColor_1("rgb(0, 110, 255)"); setColorText_1("white");
                    setColor_2("white"); setColorText_2("rgb(0, 110, 255)");
                    setColor_3("white"); setColorText_3("rgb(0, 110, 255)");
                }} 
                    style={{backgroundColor:colorBtn_1, color: colorText_1}}
                >
                    RUB
                </button>

                <button className="btn_2" 
                    onClick={() => { dispatch(currencyChangeAction('USD')); 
                    setColor_2("rgb(0, 110, 255)"); setColorText_2("white");
                    setColor_1("white"); setColorText_1("rgb(0, 110, 255)");
                    setColor_3("white"); setColorText_3("rgb(0, 110, 255)")
                }}
                    style={{backgroundColor:colorBtn_2, color: colorText_2}}
                >
                    USD
                </button>
               
                <button className="btn_3" 
                    onClick={() => { dispatch(currencyChangeAction('EUR')); 
                    setColor_3("rgb(0, 110, 255)"); setColorText_3("white");
                    setColor_1("white"); setColorText_1("rgb(0, 110, 255)");
                    setColor_2("white"); setColorText_2("rgb(0, 110, 255)");
                }} 
                    style={{backgroundColor:colorBtn_3, color: colorText_3}}
                >
                   EUR
                </button>

            </div>
            <ul className="transfer">
                <span >КОЛИЧЕСТВО ПЕРЕСАДОК</span>
                <FilterAll checked={filters.every(filter => filter.checked)}/>
                {filters.map((filter) => (
                    <FilterItem key={id} {...filter} onClick={(id) => dispatch(filterActions(id))} />
                ))}
            </ul>
        </div>
    )
}

export default Сurrency;
