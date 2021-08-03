import axios from 'axios'
import { BaseURL, config } from "../baseApi";

export const fetchUser = async () => {
    const res = await axios.get(`${BaseURL}/users`, config)
    return res.data;
}

export const fetchContacts = async () => {
    const res = await axios.get(`${BaseURL}/contacts`, config)
    return res.data;
}


// TODO: For the future
// export function getContactProfile(contactEmail) {

// } 

// export function getChat(chatId) {

// } 

// export function sendNewMessage({ message }) {

// } 

