import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StatusMessage from './StatusMessage';
import Avatar from '@material-ui/core/Avatar';
import ASD from './DJI_0180.jpg';
import './h.css'

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

    return (
        <Grid
            container
            direction="row-reverse"
            justify="flex-start"
            alignItems="center"
            className='contact-div'>
                <Grid item xs={12} sm={2}>
                    <Avatar alt='src' src={ASD} className={classes.large} />
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
                                16:57
                            </small>
                        </Grid>
                        <Grid item container justify="flex-end" xs={12} sm={10}>
                            <strong>
                                <small>
                                    Roni levy
                                </small>
                            </strong>
                        </Grid>
                    </Grid>
                    <Grid item container
                    direction="row-reverse"
                    justify
                    alignItems>
                        <Grid item xs={12} sm={1}>
                            <StatusMessage status='read' />    
                        </Grid>
                        <Grid item xs={12} sm={11}>
                            <small>
                                {getLastMessage(props.lastMessage)}
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
export default Contact;