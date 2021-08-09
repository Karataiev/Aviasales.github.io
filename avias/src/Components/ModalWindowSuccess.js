import React from 'react';
 
function ModalWindowSuccess({activeSuccess, setActiveSuccess}) {

    return (
        <div className={activeSuccess ? 'modalSuccess activeSuccess' : 'modalSuccess'} onClick={() => setActiveSuccess(false)}>
            <div className='modalSuccessContent' onClick={e => e.stopPropagation}>
                <h1>SUCCESS</h1>
            </div>
        </div>
    )
}

export default ModalWindowSuccess;