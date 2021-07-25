import axios from "axios";
import { BaseURL } from "../baseApi";

export default function loginRequest(userEmail, userPassword) {
    axios.post(`${BaseURL}/login`, {
        email: userEmail,
        password: userPassword
     }).then(res => {
        localStorage.setItem('Token', res.data.accessToken)
    }).catch(err => {
        console.log(err.response.status)
        return err.response.status
    })
}