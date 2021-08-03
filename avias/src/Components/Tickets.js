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
                        <button className="btnTicket"><div>Купить</div> за {item.price}$</button>
                    </div>

                    <div>
                        {item.departure_time}
                        <span>{item.stops}</span>
                        {item.arrival_time}
                    </div>
                    
                    {item.origin}
                    {item.origin_name}
                    {item.destination_name}
                    {item.destination}
                    

                    {item.departure_date}
                    {item.arrival_date}
                    
                    
                </li>
            ))}
        </ul>
    )
}

export default Tickets;
