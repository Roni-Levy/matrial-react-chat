import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Contact from '../Components/Contact'
import './chat.css';
import SearchBox from '../Components/SearchBox';
import TypingBox from '../Components/TypingBox';
import DefaultUserImage from '../Components/DJI_0180.jpg';  // TODO: delete before marge to master
import { useQuery } from 'react-query'
import { fetchUser, fetchContacts } from '../API/chat/chatRequests'

const useMultipleQuery = () => {
    const user = useQuery('user', fetchUser);
    const contacts = useQuery('contacts', fetchContacts);

    return [user, contacts]
}

const ChatPage = () => {
    const [ user, setUser ] = useState(useQuery('user', fetchUser).data)
    const [ contacts, setContacts ] = useState(useQuery('contacts', fetchContacts).data);
    // const [ chat, setChat ] = useState({});

    const [ inputFields, setInputFields ] = useState({
        searchContact: '',
        newMessage: ''
    })

    let history = useHistory();
    
    useEffect(() => {
        if(localStorage.getItem("Token") === "") history.push("/")
    })

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
                style={{height: "100%", backgroundColor: "green"}}
                >
                    <div className="left-side">
                        <div className="chat-details">
                            
                        </div>
                        <div className="chat-list">

                        </div>
                        <div>
                            <TypingBox />
                        </div>
                    </div>
                </Grid>

                <Grid item xs={3}
                style={{height: "100%"}}
                >
                    <RightSide
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


const RightSide = (props) => {

// TODO: delete before marge to master
//
// expected props = {
//     searchContact: onChange method,
//     userName: String,
//     userImage: Image,
//     contactList: [{
//       chatID: String
//       contactName: String,
//       contactImage: Image,
//       lastMessage: {
//           sendingTime: time as long,
//           messageStatus: String,
//           message: String,
//     }]
// }

    return(
        <div className="right-side">
            <div className="header-right-size">
                
                <SearchBox onChange={props.searchContact}/>
            </div>
            <div className="contacts-list">
            {
                // props.contactList.map((contact, index) => {
                //     return <Contact 
                //     onClick={() => { console.log("Please open chat id: " + contact.chatId) }} // TODO: 
                //     contactName={contact.contactName}
                //     contactImage={DefaultUserImage}
                //     lastMessage={contact.lastMessage}
                //     />
                // })
            }
            </div>
        </div>
    );
}

export default ChatPage;    