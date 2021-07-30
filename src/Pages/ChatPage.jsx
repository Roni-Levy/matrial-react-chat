import { Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ContactsList from '../Components/ContactsList'
import './chat.css';
import ChatPanel from '../Components/ChatPanel';
import DefaultUserImage from '../Components/DJI_0180.jpg';  // TODO: delete before marge to master
import { useQuery } from 'react-query'
import { fetchUser, fetchContacts } from '../API/chat/chatRequests'
import Loading from '../Components/Loading';
import Component from '../Components/f'

const useMultipleQuery = () => {
    const user = useQuery('user', fetchUser);
    const contacts = useQuery('contacts', fetchContacts);

    return [user, contacts]
}

const ChatPage = () => {
    const [ user, setUser ] = useState({})
    const [ contacts, setContacts ] = useState([]);
    let history = useHistory();
    
    useEffect(() => {
        if(localStorage.getItem("Token") === "") history.push("/")
    })

    const [ chat, setChat ] = useState({});
    const [ inputFields, setInputFields ] = useState({
        searchContact: '',
        newMessage: ''
    })
      
    const [
          { status: userStatusRequest, data: userData },
          { status: contactStatusRequest, data: contactData }
    ] = useMultipleQuery()

    useEffect(() => {
        if(userData !== undefined && userData !== user) {
            setUser(userData)
        }

        if(contactData !== undefined && contactData !== contacts) {
            setContacts(contactData)
        }
    });

    if(contactStatusRequest !== 'success' || userStatusRequest !== 'success') {
        return(
            <Loading />
        );
    }

    return(
        <Grid spacing={0} // frame
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{height: "99vh", width: "99vw"}}>            
            <Grid
            container spacign={0}
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            style={{height: "90%", width: "80%"}}
            >
                <Grid item xs={9}
                style={{height: "100%"}}
                >
                    <ChatPanel />
                </Grid>

                <Grid item xs={3}
                style={{height: "100%"}}
                >
                    <ContactsList
                    searchContact={() => setInputFields({ ...inputFields, searchContact: "" })}
                    userName={user.firstName + " " + user.lastName}
                    userImage={DefaultUserImage}
                    contactList={contacts}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ChatPage;    