import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Landing, Shop, Encyclopedia } from './pages';
import { PATHS } from './routes';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const Routes = () => {
    return (
        <Router>
            <App>
                <Switch>
                    <Route exact path={PATHS.LANDING} render={() => <Landing />} />
                    <Route exact path={PATHS.SHOP} render={() => <Shop />} />
                    <Route exact path={PATHS.ENCYCLOPEDIA} render={() => <Encyclopedia />} />
                </Switch>
            </App>
        </Router>
    );
}

ReactDOM.render(<Routes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
