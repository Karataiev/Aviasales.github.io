import React from 'react';
import ticketList from './ticketList.json';
import logo from './Images/image-avia.png'

function Tickets () {

    const tick = ticketList.tickets;

    function sortByPrice(tick) {
        tick.sort((a, b) => a.price > b.price ? 1 : -1);
      }
      
      sortByPrice(tick)

    return(
        <ul className="tickets">
            {tick.map(item => (
                <li key={item.price} className="someTicket">
                    
                    <div className="price">
                        <img src={logo} alt="avia" width="100px" className="turAir"/>
                        <button className="btnTicket"><div>Купить</div> за {item.price}₽</button>
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
    )
}

export default Tickets;
