import { Grid } from '@material-ui/core';
import React from 'react';
import Contact from '../Components/Contact'
import './chat.css';
import TextField from '@material-ui/core/TextField';
import SearchBox from '../Components/SearchBox';

const ChatPage = () => {
    return (
        <Grid spacing={0} // frame
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{height: "99vh", width: "99vw", backgroundColor: "yellow"}}>
            
            <Grid
            container spacign={0}
            direction="row"
            justify="flex-start"
            alignItems="flex-end"
            style={{height: "90%", width: "80%", backgroundColor: "red"}}
            >
                <Grid item xs={9}
                style={{height: "100%", backgroundColor: "white"}}
                >
                    <Contact lastMessage="sdxfcgvhbjnkm" />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    />
                </Grid>
                
                
                
                
                
                
                
                
                
                
                <Grid item xs={3}
                style={{height: "100%", backgroundColor: "blue"}}
                >
                    <Contact lastMessage="sdxfcgvhbjnkm" />
                    <SearchBox />    
                    <Contact lastMessage="sdxfcgvhbjnkm" />
                    <Contact lastMessage="sdxfcgvhbjnkm" />
                    <Contact lastMessage="sdxfcgvhbjnkm" />
                    <Contact lastMessage="sdxfcgvhbjnkm" />
                    <Contact lastMessage="sdxfcgvhbjnkm" />
                    <Contact lastMessage="sdxfcgvhbjnkm" />
                    <Contact lastMessage="sdxfcgvhbjnkm" />
                    <Contact lastMessage="sdxfcgvhbjnkm" />
                    <Contact lastMessage="sdxfcgvhbjnkm" />
                    <Contact lastMessage="sdxfcgvhbjnkm" />
                    <Contact lastMessage="sdxfcgvhbjnkm" />
                    <Contact lastMessage="sdxfcgvhbjnkm" />    
                </Grid>
            </Grid>
        </Grid>
    );
}

const NavBar = () => {
    return(
        <Grid item xs={12}
        container
        style={{height: "50px", backgroundColor: "green"}}
        >
            <Grid item xs={9} 
            style={{height: "100%", backgroundColor: "blue"}}
            >
                <Contact lastMessage="bgvfd" />
            </Grid>
            <Grid item xs={3}
            style={{height: "100%", backgroundColor: "yellow"}}
            >
                <Contact lastMessage="sdxfcgvhbjnkm" />
            </Grid>            
        </Grid>
    );
}

const Contacts = () => {
    return(
        <Grid item container xs={4}
        direction="column"
        >
            <Grid item>
                {/* TODO: searchBox */}
            </Grid>
            <Grid item>
                <Contact lastMessage='Whats Up?'/>
            </Grid>
            <Grid item>
                <Contact lastMessage='Whats Up?'/>
            </Grid>
            <Grid item>
                <Contact lastMessage='Whats Up?'/>
            </Grid>
        </Grid>
    );
}

const Chat = () => {
    return(
        <Grid item container xs={8}
        >

        </Grid>
    );
}

const Chat1 = () => {
    return (
        <Grid container // screen
        justify='center'
        alignItems='center'>
            <Grid item xs={9} container // main frame
            direction="column"
            justify='center'
            alignItems='steretch'>
                <div className="main-frame">
                {/* <Grid item container xs={12}
                direction="row"
                height='20px'
                >
                    <Grid item sm={12} xs={8}
                    height="100%"
                    className='chat-details'>
                        <div className='chat-details'></div>
                    </Grid>
                    <Grid item sm={12} xs={4}
                    height="100%"
                    className='user-details'>
                        <div className='user-details'></div>
                    </Grid>
                </Grid> */}
                </div>
                
                {/* <Grid item xs={9} container // chat 
                direction='column'>
                    <Grid item xs={9} sm={9}>
                        <Message />
                    </Grid>
                </Grid> */}
                {/* <Grid item xs={3} container // contacts 
                direction='column'>
                    <Contact lastMessage='bvdfjmfvnwkzsdxfgcvhbjnkhgfdfsdfghbjnkmlkjhgfdsfcghbjnkml,kmjnhgff,vngrsflik,'/>
                    
                    <Contact lastMessage='nfhvbgnvhfnvhgnvhgnvhgnvhgnvhgnvhgn'/> 
                    
                    <Contact lastMessage='Whats Up?'/>
                </Grid> */}
            </Grid>
        </Grid>
    );
}

export default ChatPage;