import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import SongList from './components/SongList';
import ArtistList from './components/ArtistList';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/admin" component={AdminPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/songs" component={SongList} />
                <Route path="/artists" component={ArtistList} />
            </Switch>
        </Router>
    );
};

export default App;