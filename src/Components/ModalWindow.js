import React, { useState } from 'react';
import InputField from './InputField';
import useValidator from './validator';

const defaultInputs = {
    email: {error: '', placeholder: 'Enter your email', name: 'email', value: ''},
    phone: {error: '', placeholder: 'Enter your phone', name: 'phone', value: ''},
    firstname: {error: '', placeholder: 'Enter your firstname', name: 'firstname', value: ''},
    secondname: {error: '', placeholder: 'Enter your secondname', name: 'secondname', value: ''},
    passportnumber: {error: '', placeholder: 'Enter your passportnumber', name: 'passportnumber', value: ''},
}

function ModalWindow ({setActive, setActiveSuccess}) {

    const {formValid, validateHandler } = useValidator(false);
    const [formState, setFormState] = useState(defaultInputs);

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
                    {Object.keys(formState).map((fieldName) => <InputField {...formState[fieldName]} onChange={onChange} onBlur={onBlur}/>)}
                    <button disabled={!formValid} type='submit' className='btnOrder' onClick={() => setActiveSuccess(true)}>Order</button>
                    
                </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default ModalWindow;