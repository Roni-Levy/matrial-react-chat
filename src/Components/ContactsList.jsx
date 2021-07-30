import React from 'react';
import { Grid, makeStyles, fade } from '@material-ui/core';
import SearchBox from './SearchBox'
import Contact from './Contact'
import DefaultUserImage from '../Components/DJI_0180.jpg';  // TODO: delete before marge to master
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    mainDiv: {
        height: '100%',
        width: '100%',
        backgroundColor: fade(theme.palette.common.white, 1),
    },
    header: {
        height: '100px',
        backgroundColor: fade(theme.palette.common.black, 0.1),
        textAlign: 'end'
    },
    userPrifile: {
      width: theme.spacing(6),
      height: theme.spacing(6),
      marginLeft: '5px',
    },
    searchBox: {
        marginRight: '3px',
        marginLeft: '3px',
    },
    contactsList: {
        width: '100%',
        height: 'calc(100% - 100px)',
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
  }));

const ContactsList = (props) => {
    const classes = useStyles();
    return(
        <div className={classes.mainDiv}>
            <div className={classes.header}>
                <Grid
                container
                spacing={0}
                direction="row-reverse"
                justifyContent="center"
                alignItems="center"
                >
                    <Grid item xs={2}>
                        <Avatar alt='src' src={props.userImage} className={classes.userPrifile} />
                    </Grid>
                    <Grid item xs={8}>
                        <strong><h4>{props.userName}</h4></strong>
                    </Grid>
                    <Grid item xs={1}>
                        <ChatOutlinedIcon />
                    </Grid>
                    <Grid item xs={1} >
                        <MoreVertIcon />
                    </Grid>
                    <Grid item xs={12} className={classes.searchBox}>
                        <SearchBox onChange={props.searchContact}/>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.contactsList}>
            {
                props.contactList.map((contact) => {
                    console.log(contact)
                    return <Contact
                    onClick={() => console.log(contact.contactName)} // TODO: 
                    contactName={contact.contactName}
                    contactImage={DefaultUserImage}
                    lastMessage={contact.lastMessage}
                    />
                })
            }
            </div>
        </div>
    );
}

export default ContactsList;