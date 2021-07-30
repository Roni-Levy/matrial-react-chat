import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';

const useStyles = makeStyles((theme) => ({
    gridContainer:{
        display: 'flex',
        height: '100%',
        width: '100%',
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    button: {
        height: '35px',
        width: '35px',
        alignItems: 'center',
    },
    inputDiv: {
        height: '45px',
        width: 'calc(100% - 200px)',
        backgroundColor: 'white',
        borderRadius: '50px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
    },
    inputField: {
        width: '100%',
        height: '100%',
        border: '0 solid white',
        MozUserFocus: 'none',
        focusHighlight: 'none',
        focus: 'none',
        outLine: 'none',
        boxShadow: '0 0 0px #ffffff',
    },
    textarea: {
        verticalAlign: 'middle',
        width: 'calc(100% - 20px)',
        height: '100%',
        marginLeft: '5px',
        marginRight: '5px',
        border: 'none',
        resize: 'none',
        '&:focus': {
            borderWidth: 'none',
            outline: 'none !important',
        }
    },
  }));

const TypingBox = () => {
    const classes = useStyles();    

    return(
      <div className={classes.gridContainer}>      
        <div className={classes.button}>
            <SendOutlinedIcon fontSize="large" />
        </div>
        <div className={classes.inputDiv}>
            <textarea className={classes.textarea}
            rows='5'
            placeholder="Type your message here..."
            >
            </textarea>
        </div>
        <div className={classes.button}>
            <AttachFileOutlinedIcon fontSize="large" />
        </div>
        <div className={classes.button}>
            <EmojiEmotionsOutlinedIcon onClick={() => localStorage.setItem("Token", "")} fontSize="large" />
        </div>
      </div>  
    );
}

export default TypingBox;