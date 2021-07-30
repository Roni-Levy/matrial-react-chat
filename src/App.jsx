import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'

import Login from './Pages/Login';
import ChatPage from './Pages/ChatPage';
import Register from './Pages/Register';
import './index.css';

const queryClient = new QueryClient()

const App = () => {
    return (
        <div className="App">
            <QueryClientProvider client={queryClient}>
                <Router>
                    <Switch>
                        <Route path='/chat' component={ChatPage} />
                        <Route path='/login' component={Login} />
                        <Route path='/register' component={Register} />
                        <Route path='/' component={Login} />
                    </Switch>
                </Router>
            </QueryClientProvider>
        </div>
    );
}


export default App;