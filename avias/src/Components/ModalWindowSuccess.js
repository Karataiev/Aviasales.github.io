import React from 'react';
 
function ModalWindowSuccess({setActiveSuccess}) {

    return (
        <div className='modalSuccess activeSuccess' onClick={() => setActiveSuccess(false)}>
            <div className='modal__successContent' onClick={e => e.stopPropagation}>
                <h1>SUCCESS</h1>
            </div>
        </div>
    )
}

export default ModalWindowSuccess;