import axios from "axios";
import { BaseURL } from "../baseApi";

export default function registerRequest(firstName, lastName, email, password) {
    alert("called to register request")
    
    axios.post(`${BaseURL}/register`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    })
    .then(res => {
        localStorage.setItem('Token', res.data.accessToken)
        return getErrorMessage(res.status)
    })
    .catch(err => {
        return getErrorMessage(err.response.status)
    })
}

const getErrorMessage = (statusResponse) => {
    switch(statusResponse) {
        case 401: 
            return "User already exist"
        case 200:
            return ''
        default: 
            return 'Server got unknown error'
    }
}