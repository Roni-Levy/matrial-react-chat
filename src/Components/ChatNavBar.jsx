import React from 'react';
import { makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    navBar: { 
        height: '60px',
        backgroundColor: '#e5e5e5',
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    chatImage: {
        width: theme.spacing(6),
        height: theme.spacing(6),
        marginRight: '5px',
    },
    chatName: {
        width: 'calc(100% - 140px)',
        textAlign: 'right',
        marginRight: '5px',
    },
    button: {
        width: '40px',
        height: '40px',
        justifyItems: 'center',
    },
}))

const ChatNavBar = (props) => {
    const classes = useStyles();
    const contactName = "Roni Levy";

    return(
        <div className={classes.navBar}>
            <div className={classes.chatImage}>
                <Avatar alt='src' src={props.contactImage} className={classes.large} />
            </div>
            <div className={classes.chatName}>
            {/* TODO: Change value to props.contactName   */}
            <strong><h4>{contactName}</h4></strong> 
            </div>
            <div className={classes.button}>
                <SearchIcon fontSize='large' />
            </div>
            <div className={classes.button}>
                <MoreVertIcon fontSize='large'/>
            </div>
        </div>
    );
}

export default ChatNavBar;