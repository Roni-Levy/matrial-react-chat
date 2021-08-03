import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, CssBaseline, Grid, TextField, Typography, Link, Button, Container } from '@material-ui/core';
import { VpnKey } from '@material-ui/icons';
import registerRequest from '../API/login/registerRequest'
import Alert from '@material-ui/lab/Alert'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    }));

const Register = () => {
    const classes = useStyles();
    const [ user, setUser ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const [ errorMessage, setErrorMessage ] = useState('');

    let history = useHistory();

    useEffect(() => {
        if(localStorage.getItem("Token") !== "") history.push("/chat")
    })

    const handleSubmit = () => {
        setErrorMessage(() => {return registerRequest(user.firstName, user.lastName, user.email, user.password)});
    }

    return (
        <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <VpnKey />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Sing Up
                </Typography>
                <form className={classes.form} noValidate>
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
                                onChange={e => setUser({ ...user, firstName: e.target.value })}
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
                                onChange={e => setUser({ ...user, lastName: e.target.value })}
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
                            onChange={e => setUser({ ...user, email: e.target.value })}
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
                            onChange={e => setUser({ ...user, password: e.target.value })}
                            />        
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type='submit'
                                fullWidth
                                variant='contained'
                                color='primary'
                                onClick={ handleSubmit }
                                className={classes.submit}
                            >
                                Register
                            </Button>
                        </Grid>
                        {errorMessage !== ''?<Alert severity="error">{errorMessage}</Alert>: <></>}
                        <Grid item justify='flex-end'>
                            <Link href='/login' variant='body2'>
                                I already have an account
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default Register;

