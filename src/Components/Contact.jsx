import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StatusMessage from './StatusMessage';
import Avatar from '@material-ui/core/Avatar';

import './h.css'  // // TODO: delete before marge to master


// TODO: delete before marge to master
//
// expected props = {
//     onClick: method // TODO: 
//     contactName: String,
//     contactImage: Image,
//     lastMessage: {
//         sendingTime: time as long,
//         messageStatus: String,
//         message: String,
//     }
// }

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));
  
const Contact = (props) => {
    const classes = useStyles();

    console.log(props);
    var lastMessage  = props.lastMessage;
    console.log(lastMessage);
    return (
        <Grid
            container
            direction="row-reverse"
            justify="flex-start"
            alignItems="center"
            className='contact-div'>
                <Grid item xs={12} sm={2}>
                    <Avatar alt='src' src={props.contactImage} className={classes.large} />
                </Grid>
                <Grid item container xs={12} sm={10}
                direction="column"
                justify
                alignItems>
                    <Grid item container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start">
                        <Grid item xs={12} sm={2}>
                            <small>
                                {getTime(1626213628598)}
                            </small>
                        </Grid>
                        <Grid item container justify="flex-end" xs={12} sm={10}>
                            <strong>
                                <small>
                                    {props.contactName}
                                </small>
                            </strong>
                        </Grid>
                    </Grid>
                    <Grid item container
                    direction="row-reverse"
                    justify
                    alignItems>
                        <Grid item xs={12} sm={1}>
                            <StatusMessage status={lastMessage.messageStatus} />    
                        </Grid>
                        <Grid item xs={12} sm={11}>
                            <small>
                                {getLastMessage(lastMessage.message)}
                            </small>        
                        </Grid>
                    </Grid>
                </Grid>  
        </Grid>
    );
}

const getLastMessage = (lastMessage) => {
    var messageToReturn = lastMessage;
    
    if(lastMessage.length > 45) {
        messageToReturn = lastMessage.substring(0, 41) + "...";
    }

    return messageToReturn
}

const getTime = (timeAsLong) => {
    // TODO: change format to work with moment.js after resolve the problem at npm installation

    var date = new Date(timeAsLong);
    var hours = '0' + date.getHours();
    var minutes = '0' + date.getMinutes();

    return hours.substring(hours.length - 2, hours.length) + ":" + minutes.substring(minutes.length - 2, minutes.length);
}

export default Contact;