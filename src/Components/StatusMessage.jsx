import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar'
import MessagePendigIcon from '../Icons/message-pending.png';
import MessageSendIcon from '../Icons/message-sended.png';
import MessageReadIcon from '../Icons/message-readed.png';
import MessageAccepted from '../Icons/message-accepted.png'


const useStyles = makeStyles((theme) => ({
    avatar: {
      width: theme.spacing(2),
      height: theme.spacing(2),
    },
  }));
  

const StatusMessage = (props) => {
    let icon = getStatusIcon(props.status);

    return (
        <Avatar alt="" src={icon} className={useStyles().avatar} />
    );
}

const getStatusIcon = (status) => {
    console.log("The status in the switch: " + status);
    switch(status) {
        case 'pending': 
            return MessagePendigIcon;
        case 'send': 
            return MessageSendIcon;
        case 'read': 
            return MessageReadIcon;
        case 'accept' :
            return MessageAccepted;
        default : 
            console.log("default in switch case");
            return MessagePendigIcon;
    }
}

export default StatusMessage;