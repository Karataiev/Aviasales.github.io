import React from 'react';
import store from '../Redux/createStore';

store.subscribe(() => console.log(store.getState()))

function Сurrency() {
    return(
       
            <div className="currencyStyle">
                <span>ВАЛЮТА</span>
                <div className="btnCur">
                    <button className="btn_1" onClick={() =>{store.dispatch({type:"RUB"})}}>RUB</button>
                    <button className="btn_2" onClick={() =>{store.dispatch({type:"USD"})}}>USD</button>
                    <button className="btn_3" onClick={() =>{store.dispatch({type:"EUR"})}}>EUR</button>
                </div>
                
                <ul className="transfer">
                <span >КОЛИЧЕСТВО ПЕРЕСАДОК</span>
                <li className="checkLi">
                    <span>
                        <input type="checkbox" className="one"/>
                    </span>
                    <span className="text">Все</span>
                    <span className="text_2">ТОЛЬКО</span>
                </li>
                <li className="checkLi">
                    <span>
                        <input type="checkbox" className="one"/>
                    </span>
                    <span className="text">Без пересадок</span>
                    <span className="text_2">ТОЛЬКО</span>
                </li>
                <li className="checkLi">
                    <span>
                        <input type="checkbox" className="one"/>
                    </span>
                    <span className="text">1 пересадка</span>
                    <span className="text_2">ТОЛЬКО</span>
                </li>
                <li className="checkLi">
                    <span>
                        <input type="checkbox" className="one"/>
                    </span>
                    <span className="text"> 2 пересадки</span>
                    <span className="text_2">ТОЛЬКО</span>
                </li>
                <li className="checkLiLast">
                    <span>
                        <input type="checkbox" className="one"/>
                    </span>
                    <span className="text">3 пересадки</span>
                    <span className="text_2">ТОЛЬКО</span>
                </li>
            </ul>
            </div>      
    )
}

export default Сurrency;