import React from 'react';
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core';
import Image from './DJI_0180.jpg'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        // flexDirection: 'row-reverse',
        width: 'auto',
        maxWidth: '60%',
    },
    mContainer: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: "100%",
        justifyContent: 'space-around',
        // backgroundColor: '#dbf6c6',
        backgroundColor: '#ffffff',
        borderRadius: '15px'
    },
    senderProfile: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        alignSelf: 'flex-end'
    },
    large: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    sendingTimes: {
        paddingLeft: '5px',
    },
    tail: {
        alignSelf: 'flex-end',
        width: theme.spacing(1),
        height: theme.spacing(1),
    },
}));

const Message = () => {
const props = {
    senderName: "ron",
    userName: 'roni levy',
    senderImage: Image,
    status: "seen",          
    sendingTime: 1234657894654263465,
    message: "Whats up? R U OK?     werty qwert asdfg asdfg mnbvcbjhnk,me.rdgfvnzae serkgjn setg setgkjn   zsfhnkz,r ziurjnf zrfgkkus srfvikj fvjxdnfnvnkxfvz azrfanre fawrihnfawr  qwertqwert",
}

    const classes = useStyles();
    const getSenderName = () => {
        return props.senderName === props.userName? "You": props.senderName
    }

    return (
        <li>
            <div className={classes.container}>
                <div className={classes.senderProfile}>
                    <Avatar alt='src' src={Image} className={classes.large} />
                </div>
                <div className={classes.tail}>

                </div>
                <div className={classes.mContainer}>
                    <div style={{display: 'flex', justifyContent: 'space-between', margin: '5px'}}>
                        <div>
                        <strong>
                            {getSenderName()}
                        </strong>
                        </div>
                        <div className={classes.sendingTime}> <small> 01:01VV </small></div>
                    </div>
                    <div style={{maxWidth: '100%', display: 'flex', margin: '5px', marginTop: '0px'}}>
                        {props.message}
                    </div>  
                </div>
            </div>
        </li>
    );
}

export default Message;