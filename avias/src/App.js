import React, { useEffect, useState } from 'react';
import Сurrency from './Components/Сurrency';
import Ticket from './Components/Tickets';

function App({changeFilter}) {

    return (
        <div className="wrapper">
            <Сurrency changeFilter={changeFilter}/>
            <Ticket/>
        </div> 
    );
}

export default App;

