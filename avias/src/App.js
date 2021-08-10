import React from 'react';
import { useState } from 'react';
import Сurrency from './Components/Сurrency';
import Modal from './Components/ModalWindow';
import ModalWindowSuccess from './Components/ModalWindowSuccess';
import logo from './Components/Images/image-avia.png'
import { useSelector } from 'react-redux';

function App({changeFilter}) {

const tickets = useSelector(state => state.root.tickets);

const [modalActive, setModalActive] = useState(false)
const [modalActiveSuccess, setModalActiveSuccess] = useState(false)

  return (
  <>
    <div className="wrapper">
      <Сurrency changeFilter={changeFilter}/>
      
      <ul className="tickets">
            {tickets.map(item => (
                <li key={item.price} className="someTicket"> 
                    <div className="price">
                        <img src={logo} alt="avia" width="100px" className="turAir"/>
                        <button className="btnTicket" onClick={() => setModalActive(true)}><div>Купить</div> за {item.price}</button>
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
                            <span>{item.departure_date}</span>
                            <span className="divDateSpan">{item.arrival_date}</span>
                        </div>
                    </div>                                     
                </li>
            ))}
        </ul>

        <Modal active={modalActive} setActive={setModalActive}/>
        <ModalWindowSuccess activeSuccess={modalActiveSuccess} setActiveSuccess={setModalActiveSuccess}/>
    </div> 
  </>
  );
}

export default App;