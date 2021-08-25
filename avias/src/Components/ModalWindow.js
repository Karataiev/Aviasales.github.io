import React, { useEffect } from 'react';
import { useState } from 'react'

function ModalWindow ({setActive, setActiveSuccess}) {

const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [firstname, setFirstname] = useState('');
const [secondname, setSecondname] = useState('');
const [passportnumber, setPassportnumber] = useState('');

const [emailDirty, setEmailDirty] = useState(false);
const [phoneDirty, setPhoneDirty] = useState(false);
const [firstnameDirty, setFirstnameDirty] = useState(false);
const [secondnameDirty, setSecondnameDirty] = useState(false);
const [passportnumberDirty, setPassportnumberDirty] = useState(false);

const [emailError, setEmailError] = useState('Поле должно быть заполненым');
const [phoneError, setPhoneError] = useState('Поле должно быть заполненым');
const [firstnameError, setFirstnameError] = useState('Поле должно быть заполненым');
const [secondnameError, setSecondnameError] = useState('Поле должно быть заполненым');
const [passportnumberError, setPassportnumberError] = useState('Поле должно быть заполненым');

const [formValid, setFormValid] = useState(false)

useEffect(() => {
    if (emailError || phoneError || firstnameError || secondnameError || passportnumberError) {
        setFormValid(false)
    } else {
        setFormValid(true)
    }
}, [emailError, phoneError, firstnameError, secondnameError, passportnumberError])

const emailHandled = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())){
        setEmailError('Данные некоректны')
    } else {
        setEmailError('')
    }
}

const phoneHandled = (p) => {
    setPhone(p.target.value)
    if (p.target.value.length < 10 || p.target.value.length > 10 || /^[0-9]+$/.test(p)){
        setPhoneError('Данные некоректны')
    } else {
        setPhoneError('')
    }
}

const firstnameHandled = (f) => {
    setFirstname(f.target.value)
    const re = /^[А-ЯЁ][а-яё]/;
    if (!re.test(String(firstname))){
        setFirstnameError('Данные некоректны')
    } else {
        setFirstnameError('')
    }
}

const secondnameHandled = (s) => {
    setSecondname(s.target.value)
    const re = /^[А-ЯЁ][а-яё]/;
    if (!re.test(String(secondname))){
        setSecondnameError('Данные некоректны') 
    } else {
        setSecondnameError('')
    }
}

const passportnumberHandled = (pas) => {
    setPassportnumber(pas.target.value)
    if (pas.target.value.length < 6 || pas.target.value.length > 6 || /^[0-9]+$/.test(pas)){
        setPassportnumberError('Данные некоректны')
        if(!pas.target.value){
            setPassportnumberError ('Поле должно быть заполненым')
        }
    } else {
        setPassportnumberError('')
    }
}

const blurHandler = (e) => {
    switch (e.target.name) {
        case 'email':
            setEmailDirty(true)
            break
        case 'phone':
            setPhoneDirty(true)
            break
        case 'firstname':
            setFirstnameDirty(true)
            break
        case 'secondname':
            setSecondnameDirty(true)
            break
        case 'passportnumber':
            setPassportnumberDirty(true)
            break
            default:
    }
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
                    
                    <input onChange={e => emailHandled(e)} value={email} onBlur={e => blurHandler(e)} name='email' type='text' placeholder='Enter your email' className='inputValid'/>
                    {(emailDirty && emailError) && <div className="divError" style={{color: 'red'}}>{emailError}</div>}

                    <input onChange={p => phoneHandled(p)} value={phone} onBlur={e => blurHandler(e)} name='phone' type='text' placeholder='Enter your phone' className='inputValid'/>
                    {(phoneDirty && phoneError) && <div className="divError" style={{color: 'red'}}>{phoneError}</div>}

                    <input onChange={f => firstnameHandled(f)} value={firstname} onBlur={e => blurHandler(e)} name='firstname' type='text' placeholder='Enter your firstname' className='inputValid'/>
                    {(firstnameDirty && firstnameError) && <div className="divError" style={{color: 'red'}}>{firstnameError}</div>}

                    <input onChange={s => secondnameHandled(s)} value={secondname} onBlur={e => blurHandler(e)} name='secondname' type='text' placeholder='Enter your secondname' className='inputValid'/>
                    {(secondnameDirty && secondnameError) && <div className="divError" style={{color: 'red'}}>{secondnameError}</div>}

                    <input onChange={pas => passportnumberHandled(pas)} value={passportnumber} onBlur={e => blurHandler(e)} name='passportnumber' type='text' placeholder='passportnumber' className='inputValid'/>
                    {(passportnumberDirty && passportnumberError) && <div className="divError" style={{color: 'red'}}>{passportnumberError}</div>}

                    <button disabled={!formValid} type='submit' className='btnOrder' onClick={() => setActiveSuccess(true)}>Order</button>
                    
                </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default ModalWindow;
