import React from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group';
import './App.css';
import routes from './routes/routes';
import MainPage from "./components/MainPage";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route
                    render={({ location }) => {
                        const { pathname, key } = location;
                        return (
                            <TransitionGroup>
                                <CSSTransition
                                    key={key}
                                    classNames={pathname === '/' ? 'main-page' : 'sub-page'}
                                    timeout={{
                                        exit: 500,
                                    }}
                                >
                                    <Switch location={location}>
                                        <Route
                                            exact
                                            path="/"
                                            render={() => (
                                                <div className="main-container main-page">
                                                   <MainPage routes={routes}/>
                                                </div>
                                            )}
                                        />
                                        {routes.map(route => (
                                            <Route
                                                key={route.path}
                                                path={route.path}
                                                render={() => (
                                                    <div className="main-container sub-page">
                                                        <Link className="link" to="/">
                                                            You are on this page: {route.title} !
                                                        </Link>
                                                    </div>
                                                )}
                                            />
                                        ))}
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        )
                    }}
                />
            </div>
        </BrowserRouter>
    );
}

export default App;
