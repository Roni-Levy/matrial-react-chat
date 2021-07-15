import React from 'react';
import { Grid } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import './h.css'

const TypingBox = () => {
    const useStyles = makeStyles((theme) => ({
        search: {
          position: 'relative',
          borderRadius: "50px",
          backgroundColor: fade(theme.palette.common.black, 0.15),
          '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
          },
          marginLeft: 0,
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(0),
            width: '100%',
          },
        },
        inputRoot: {
          color: 'inherit',
        },
        inputInput: {
          padding: theme.spacing(1, 1, 1, 0),
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '100%',
            '&:focus': {
              width: '20ch',
            },
          },
        },
        inputField: {
            borderRadius: theme.shape.borderRadius,
        },
      }));

    const classes = useStyles();    

    return(
        <div className="typing-box">
            <span className="icon-button margin-left">
                <SendOutlinedIcon fontSize="large" />
            </span> 
            <span className="input-field margin-right margin-left">   
                <TextField id="outlined-basic" placeholder="Type your message here..." variant="outlined" />
            </span>
            <span className="icon-button margin-right">
                <AttachFileOutlinedIcon fontSize="large" />
            </span>
            <span className="icon-button margin-right">
                <EmojiEmotionsOutlinedIcon fontSize="large" />
            </span>
        </div>
    );
}

export default TypingBox;