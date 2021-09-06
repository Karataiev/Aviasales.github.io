import React from 'react';

function InputField ({name, placeholder, onChange, error, value, dirty, onBlur}) {

    return (
        <>
            <input 
                name={name} 
                type='text' 
                placeholder={placeholder} 
                onChange={onChange} 
                value={value} 
                onBlur={onBlur}  
                className={`${dirty && error ? 'inputValidError' : 'inputValid'}`}
            />
            {(dirty && error) && <div className="divError" style={{color: 'red'}}>{error}</div>}
        </>
    )
}


export default InputField;



