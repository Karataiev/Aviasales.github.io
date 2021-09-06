import {useState, useEffect} from 'react';


 const useValidator = () => {

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

    const validateHandler = (name, value) => {
        if (name === 'email') return emailHandled(value)
        if (name === 'phone') return phoneHandled(value)
        if (name === 'firstname') return fullNameHandled(value)
        if (name === 'secondname') return fullNameHandled(value)
        if (name === 'passportnumber') return passportnumberHandled(value)
    }

    const emailHandled = (email) => {
        setState({...state, email})
        const re = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !re.test(email)? 'Данные некоректны' : '';
    }

    const phoneHandled = (phone) => {
        setState({...state, phone})
        const re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        return !re.test(phone)? 'Данные некоректны' : '';
    }

    const fullNameHandled = (fullName) => {
        setState({...state, fullName})
        const re = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']{3,15}?$/u;
        return !re.test(String(fullName))? 'Данные некоректны' : '';
    }

    const passportnumberHandled = (passportnumber) => {
        setState({...state, passportnumber})
        const re = /^[0-9]{6,6}$/;
        return (!re.test(passportnumber))? 'Данные некоректны' : '';
    }

    const blurHandler = (e) => {
        setStateDirty({...stateDirty, [e.target.name]: true})
    }

    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        setFormValid(!stateError.emailError && !stateError.phoneError && !stateError.firstnameError && !stateError.secondnameError && !stateError.passportnumberError)
    }, [stateError.emailError, stateError.phoneError, stateError.firstnameError, stateError.secondnameError, stateError.passportnumberError])

    return {state,
        validateHandler,
            stateDirty, 
            stateError, 
            formValid, 
            emailHandled, 
            phoneHandled, 
            passportnumberHandled, 
            blurHandler,
            setStateError
        }
}

export default useValidator;