import axios from "axios";
import { BaseURL } from "../baseApi";

export default function loginRequest(userEmail, userPassword) {
    alert(userEmail + "_" + userPassword)
    axios.post(`${BaseURL}/login`, {
        email: userEmail,
        password: userPassword
     }).then(res => {
        console.log(res)
        console.log(res.data)
        // TODO: if token set localStorage and set router
        // if its badRequest return err message
    }).catch(err => {
        console.log(err)
    })
}