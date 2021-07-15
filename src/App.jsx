import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import Login from './Pages/Login';
import ChatPage from './Pages/Chat';
import Register from './Pages/Register';
import './index.css';

const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path='/chat' component={ChatPage} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    {/* <Route psath='/' component={Login} /> */}
                    <Route path='/'>
                        <Redirect to='/login' />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}


export default App;