import React, { useEffect } from 'react';
import { useState } from 'react'

function ModalWindow ({setActive, setActiveSuccess}) {

const [state, setState] = useState({
    email: '',
    phone: '',
    firstname: '',
    secondname: '',
    passportnumber: ''
})

const [stateDirty, setStateDirty] = useState({
    email: false,
    phone: false,
    firstname: false,
    secondname: false,
    passportnumber: false
})

const [stateError, setStateError] = useState({
    emailError: 'Поле должно быть заполненым',
    phoneError: 'Поле должно быть заполненым',
    firstnameError: 'Поле должно быть заполненым',
    secondnameError: 'Поле должно быть заполненым',
    passportnumberError: 'Поле должно быть заполненым'
}) 

const emailHandled = (e) => {
    setState({...state, email: e.target.value})
    const re = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(e.target.value)){
        setStateError({...stateError, emailError: 'Данные некоректны'})
    } else {
        setStateError({...stateError, emailError: ''})
    }
}

const phoneHandled = (p) => {
    setState({...state, phone: p.target.value})
    const reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    if (!reg.test(p.target.value)){
        setStateError({...stateError, phoneError: 'Данные некоректны'})
    } else {
        setStateError({...stateError, phoneError: ''})
    }
}

const firstnameHandled = (f) => {
    setState({...state, firstname: f.target.value})
    const re = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']{3,15}?$/u;
    if (!re.test(String(f.target.value))){
        setStateError({...stateError, firstnameError: 'Данные некоректны'})
    } else {
        setStateError({...stateError, firstnameError: ''})
    }
}

const secondnameHandled = (s) => {
    setState({...state, secondname: s.target.value})
    const re = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']{2,15}?$/u;
    if (!re.test(String(s.target.value))){
        setStateError({...stateError, secondnameError: 'Данные некоректны'}) 
    } else {
        setStateError({...stateError, secondnameError: ''})
    }
}

const passportnumberHandled = (pas) => {
    setState({...state, passportnumber: pas.target.value})
    const re = /^[0-9]{6,6}$/;
    if (!re.test(pas.target.value)){
        setStateError({...stateError, passportnumberError: 'Данные некоректны'})
    } else {
        setStateError({...stateError, passportnumberError: ''})
    }
}

const blurHandler = (e) => {
    setStateDirty({...stateDirty, [e.target.name]: true})
}

const [formValid, setFormValid] = useState(false)

useEffect(() => {
    setFormValid(!stateError.emailError && !stateError.phoneError && !stateError.firstnameError && !stateError.secondnameError && !stateError.passportnumberError)
}, [stateError.emailError, stateError.phoneError, stateError.firstnameError, stateError.secondnameError, stateError.passportnumberError])

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
                    
                    <input onChange={e => emailHandled(e)} value={state.email} onBlur={(e) => blurHandler(e)} name='email' type='text' placeholder='Enter your email' className={`${stateDirty.email && stateError.emailError ? 'inputValidError' : 'inputValid'}`}/>
                    {(stateDirty.email && stateError.emailError) && <div className="divError" style={{color: 'red'}}>{stateError.emailError}</div>}

                    <input onChange={p => phoneHandled(p)} value={state.phone} onBlur={e => blurHandler(e)} name='phone' type='text' placeholder='Enter your phone' className={`${stateDirty.phone && stateError.phoneError ? 'inputValidError' : 'inputValid'}`}/>
                    {(stateDirty.phone && stateError.phoneError) && <div className="divError" style={{color: 'red'}}>{stateError.phoneError}</div>}

                    <input onChange={f => firstnameHandled(f)} value={state.firstname} onBlur={e => blurHandler(e)} name='firstname' type='text' placeholder='Enter your firstname' className={`${stateDirty.firstname && stateError.firstnameError ? 'inputValidError' : 'inputValid'}`}/>
                    {(stateDirty.firstname && stateError.firstnameError) && <div className="divError" style={{color: 'red'}}>{stateError.firstnameError}</div>}

                    <input onChange={s => secondnameHandled(s)} value={state.secondname} onBlur={e => blurHandler(e)} name='secondname' type='text' placeholder='Enter your secondname' className={`${stateDirty.secondname && stateError.secondnameError ? 'inputValidError' : 'inputValid'}`}/>
                    {(stateDirty.secondname && stateError.secondnameError) && <div className="divError" style={{color: 'red'}}>{stateError.secondnameError}</div>}

                    <input onChange={pas => passportnumberHandled(pas)} value={state.passportnumber} onBlur={e => blurHandler(e)} name='passportnumber' type='text' placeholder='passportnumber' className={`${stateDirty.passportnumber && stateError.passportnumberError ? 'inputValidError' : 'inputValid'}`}/>
                    {(stateDirty.passportnumber && stateError.passportnumberError) && <div className="divError" style={{color: 'red'}}>{stateError.passportnumberError}</div>}

                    <button disabled={!formValid} type='submit' className='btnOrder' onClick={() => setActiveSuccess(true)}>Order</button>
                    
                </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default ModalWindow;
