import {useState} from 'react';


 const useValidator = () => {

    const [state, setState] = useState({
        email: '',
        phone: '',
        firstname: '',
        secondname: '',
        passportnumber: ''
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
        return !re.test(email)? 'Некоректні дані' : '';
    }

    const phoneHandled = (phone) => {
        setState({...state, phone})
        const re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        return !re.test(phone)? 'Некоректні дані' : '';
    }

    const fullNameHandled = (fullName) => {
        setState({...state, fullName})
        const re = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']{3,15}?$/u;
        return !re.test(String(fullName))? 'Некоректні дані' : '';
    }

    const passportnumberHandled = (passportnumber) => {
        setState({...state, passportnumber})
        const re = /^[0-9]{6,6}$/;
        return (!re.test(passportnumber))? 'Некоректні дані' : '';
    }

    return {validateHandler}
}

export default useValidator;