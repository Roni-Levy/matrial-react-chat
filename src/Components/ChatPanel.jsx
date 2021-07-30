import React from 'react';
import { makeStyles } from '@material-ui/core';
import TypingBox from './TypingBox';
import ChatNavBar from './ChatNavBar';
import ChatBackgroundImage from '../Icons/chatBackground.jpg'
import Message from './Message';

const useStyles = makeStyles(() => ({
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${ChatBackgroundImage})`,
    },
    chatContainer: {
        display: 'flex',
        flexDirection: 'column-reverse',
        height: 'calc(100% - 60px)',
        backgroundColor: '#bec5a057',
    },
    messagesList: {
        display: 'flex',
        justifyContent: 'center', 
        height: 'auto',
        width: '100%',
        overflow: 'auto',
        '@global': {
            '*::-webkit-s-crollbar': {
            width: 1
            },
            '*::-webkit-scrollbar-track': {
                boxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)'
            },
            '*::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(0,0,0,.1)',
                borderRadius: '5px',
                outline: '1px solid slategrey'
            },
            '::-webkit-scrollbar-button:increment': {
                width: '0px'
            }
        },
    },
    ulMessages: {
        listStyleType: 'none',
        width: '100%', 
    },
    typingBox: {
        minHeight: '60px',
        maxHeight: '140px',
        overflow: 'hidden',
    },
}));

const ChatPanel = () => {
    const classes = useStyles();

    return(
        <div className={classes.mainContainer}>
            <ChatNavBar />
            <div className={classes.chatContainer}>
            <div className={classes.typingBox}>
                <TypingBox />
            </div>
            <div className={classes.messagesList}>
                <ul className={classes.ulMessages}>       
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                </ul>
            </div>
            </div>
        </div>
    );
}

export default ChatPanel;