import React from 'react';
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link'

import { Avatar, CssBaseline, Grid, TextField, Typography } from '@material-ui/core';

const SingUp = (props) => {
    return (
        <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <div className={props.paper}>
                <Avatar className={props.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Sing Up
                </Typography>
                <form className={props.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField 
                                variant='outlined'
                                margin='normal'
                                required
                                fullWidth
                                id='first-name'
                                label='First Name'
                                name='first-name'
                                autoFocus
                                onChange={props.onFirstNameChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField 
                                variant='outlined'
                                margin='normal'
                                required
                                fullWidth
                                id='last-name'
                                label='Last Name'
                                name='last-name'
                                autoFocus
                                onChange={props.onLastNameChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            id='email'
                            label='Email Address'
                            name='email'
                            autoComplete='email'
                            autoFocus
                            onChange={props.onEmailChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            id='password'
                            label='Password'
                            type='password'
                            name='password'
                            autoComplete='current-password'
                            autoFocus
                            onChange={props.onPasswordChange}
                            />        
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type='submit'
                                fullWidth
                                variant='contained'
                                color='primary'
                                onClick={props.singUp}
                                className={props.submit}
                            >
                                Sing In
                            </Button>
                        </Grid>
                        <Grid item justify='flex-end'>
                            <Link variant='body2' onClick={props.setIsNewUser}>
                                I already have an account
                            </Link>
                        </Grid>
                    </Grid>
                    
                    
                    
                    
                    {/* <FormCs */}
                </form>
            </div>
        </Container>
    );
}

export default SingUp;