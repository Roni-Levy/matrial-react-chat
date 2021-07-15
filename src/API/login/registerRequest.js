import axios from "axios";
import { BaseURL } from "../baseApi";

export default function registerRequest(firstName, lastName, email, password) {
    alert("called to register request")
    
    axios.post(`BaseURL/register`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    })
    .then(res => {
        console.log(res)
        console.log(res.data)

        //TODO: if success go to login page else return err message
    })
    .catch(err => {
        console.log(err)        
    })
}