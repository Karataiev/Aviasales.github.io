import React, { useState } from 'react';
import InputField from './InputField';
import useValidator from './validator';

const fieldEmpty  = 'Поле должно быть заполненым';

const defaultInputs = {
    email: {error: fieldEmpty, placeholder: 'Enter your email', name: 'email', value: '', dirty: false},
    phone: {error: fieldEmpty, placeholder: 'Enter your phone', name: 'phone', value: '', dirty: false},
    firstname: {error: fieldEmpty, placeholder: 'Enter your firstname', name: 'firstname', value: '', dirty: false},
    secondname: { error: fieldEmpty, placeholder: 'Enter your secondname', name: 'secondname', value: '', dirty: false},
    passportnumber: {error: fieldEmpty, placeholder: 'Enter your passportnumber', name: 'passportnumber', value: '', dirty: false},
}

function ModalWindow ({setActive, setActiveSuccess}) {
    
    const {validateHandler} = useValidator();
    const [formState, setFormState] = useState(defaultInputs);
    const isBntDisabled = Object.keys(formState).every(fieldName => formState[fieldName].dirty && !formState[fieldName].error)

    const onChange = (event) => {
        const {value, name} = event.target;
        const currentField = formState[event.target.name];
        if (!currentField) return;
        const error = validateHandler(name, value)
        setFormState({...formState, ...{[name]: {...currentField, value, error}}})
    }

    const onBlur = (event) => {
        const {name} = event.target;
        const currentField = formState[event.target.name];
        setFormState({...formState, ...{[name]: {...currentField, dirty: true}}})
    }

    return (
        <>
        <div className='modal active' onClick={() => setActive(false)}>
            <div className='modal__content active' onClick={e => e.stopPropagation()}>
                <div className='formModal'>
                <form className='formValid' onSubmit={(e) => {
                    e.preventDefault();
                    setActive(false);
                }}
                >
                    <h1 className='order'>Order window</h1>
                    {Object.keys(formState).map((fieldName) => <InputField key={fieldName} {...formState[fieldName]} onChange={onChange} onBlur={onBlur}/>)}
                    <button disabled={!isBntDisabled}  type='submit' className='btnOrder' onClick={() => setActiveSuccess(true)}>Order</button>
                </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default ModalWindow;