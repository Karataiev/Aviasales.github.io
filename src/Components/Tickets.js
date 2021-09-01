import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import logo from './Images/image-avia.png';
import ModalWindow from './ModalWindow';
import ModalWindowSuccess from './ModalWindowSuccess';

function Ticket () {
    const tickets = useSelector(state => state.root.tickets);

    const currency = useSelector(state => state.root.currency);

    const [modalActive, setModalActive] = useState(false)
    const [modalActiveSuccess, setModalActiveSuccess] = useState(false)

    const currencySymbols = {
        RUB: ' ₽',
        USD: ' $',
        EUR: ' €'
    }

    return (
        <>
        <ul className="tickets">
        {tickets.map(item => (
            <li key={Math.random()} className="someTicket"> 
                <div className="price">
                    <img src={logo} alt="avia" width="100px" className="turAir"/>
                        <button className="btnTicket" onClick={() => setModalActive(true)}><div>Купить</div>за {item.price} {currencySymbols[currency]}</button>
                </div>
                <div className="divInfo">
                    <div className="time">
                        <span className="time_1">{item.departure_time}</span>
                        <span className="stops">{item.stops} Transfer<div><hr/></div></span>
                        <span className="time_2">{item.arrival_time}</span>
                    </div>
                
                    <div className="origin">
                        <span className="span_1">{item.origin},</span>
                        <span className="span_2">{item.origin_name}</span>
                        <span className="span_3">{item.destination_name},</span>
                        <span className="span_4">{item.destination}</span>
                    </div>
                    <div className="divDate">
                        <span className="divDateSpan_0">{item.departure_date}</span>
                        <span className="divDateSpan">{item.arrival_date}</span>
                    </div>
                </div>                                     
            </li>
            ))}
        </ul>

        {modalActive && <ModalWindow setActive={setModalActive} setActiveSuccess={setModalActiveSuccess}/>}
        
        {modalActiveSuccess && <ModalWindowSuccess setActiveSuccess={setModalActiveSuccess}/>}
        </>
    )
}
export default Ticket;
