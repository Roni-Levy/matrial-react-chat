import { Grid } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import Contact from '../Components/Contact'
import './chat.css';
import SearchBox from '../Components/SearchBox';
import TypingBox from '../Components/TypingBox';
import DefaultUserImage from '../Components/DJI_0180.jpg';  // TODO: delete before marge to master

const ChatPage = () => {
// TODO: delete before marge
//
// const expectedProps = {
//     user: {
//         userName: {
//             firstName: String,
//             lastName: String,
//         },
//         userAcount: {
//             userEmail: String,
//             userPassword: String,
//         },
//         userImage: Image,
//     },
//     contactList: [{
//         chatId: UUID,
//         contactName: String,
//         contactImage: Image,
//         lastMessage: {
//             sendingTime: time as long,
//             messageStatus: String,
//             message: String,
//         }
//     }]
// }
//
// const expectedChat = {
//     chatId: UUID,
//     contactName: String,
//     contactImage: Image,
//     messages: [{
//         messageId: Number,
//         sendingTime: Date,
//         readMessageStatus: String,
//         message: String,
//         sender: String,
//     }]
// } 

    const [c, setC] = useState({
        user: {
            email: '',
            password: ''
        },
        chatsList: [{
            userImage: '',
            lastMessage: {
                sendingTime: 0,
                readMessageStatus: '',
                message: ''
            },

        }],
        chat: {
            userImage: '',
            massagesList: [ {
                messageId: 0,
                message: '',
                sendingTime: 0,
                readMessageStatus: '',
            }],
            isUserOnline: false,
            isUserTyping: false
            }
    });

    return(
        <Grid spacing={0} // frame
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{height: "99vh", width: "99vw"}}>
            
            <Grid
            container spacign={0}
            container
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
                    <RightSide />
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
//       contactName: String,
//       contactImage: Image,
//       lastMessage: {
//           sendingTime: time as long,
//           messageStatus: String,
//           message: String,
//     }]
// }

    const mockContactList = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,11,1,1,1,1,1,1,11,1,1,1,1,11,1,1,1,1,1,1,1,1,11,1,1,1,1,1,1,1,1,1];

    return(
        <div className="right-side">
            <div className="header-right-size">
                
                <SearchBox />
            </div>
            <div className="contacts-list">
            {
                createContact()
            }
            </div>
        </div>
    );
}

// TODO: delete before marge to master
const createContact = () => {
    var props = {
        contactName: 'Roni Levy',
        contactImage: DefaultUserImage,
        lastMessage: {
            sendingTime: 1626213628598,
            messageStatus: 'read',
            message: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah',
        }
    };

    return <Contact 
    contactName={props.contactName}
    contactImage={props.contactImage}
    lastMessage={{
        sendingTime: 1626213628598,
        messageStatus: 'read',
        message: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah',
    }} />
}

export default ChatPage;    