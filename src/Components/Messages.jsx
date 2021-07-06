import React from 'react';
import Avatar from '@material-ui/core/Avatar'


const Message = (props) => {
    return (
        <div>
        <div className='header'>
        <strong><small>Roni Levy</small></strong> {/* TODO: change to {{props.senderName}} */ }
            <Avatar src="./DJI_0180.JPG" />
        </div>
        <div className='message'>
            <div className='message-tail'>
                <img src="" alt="" />
            </div>
            <h5> whats up ?</h5>
        </div>

        </div>
    );
}

export default Message;