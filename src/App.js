import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components'
import routes from './routes/routes';
import MainPage from "./components/MainPage";
import {StyledLink} from "./styledComponents/styledComponents";


const Container = styled('div')`
    top: 0;
    left: 0;
    position: fixed;
    width: 100vw;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition: transform 1s ease-in-out;
    height: 100vh;
    &.main-page-enter-active, .sub-page-enter-active {
        transform: translate(0, 0);
    }
    &.main-page-enter {
    transform: translate(-100vw, 0);
    }
    &.main-page-exit {
        transform: translate(-100vw, 0);
    }
    &.sub-page-enter {
    transform: translate(100vw, 0);
    }
    &.sub-page-exit {
        transform: translate(100vw, 0);
    }
`;

const StyledApp = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #282c34;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
`;

function App() {
    return (
        <BrowserRouter>
            <StyledApp>
                <Route
                    render={({ location }) => {
                        const { pathname, key } = location;
                        return (
                            <TransitionGroup>
                                <CSSTransition
                                    key={key}
                                    classNames={pathname === '/' ? 'main-page' : 'sub-page'}
                                    timeout={{
                                        exit: 1000,
                                    }}
                                >
                                    <Switch location={location}>
                                        <Route
                                            exact
                                            path="/"
                                            render={() => (
                                                <Container>
                                                   <MainPage routes={routes}/>
                                                </Container>
                                            )}
                                        />
                                        {routes.map(route => (
                                            <Route
                                                key={route.path}
                                                path={route.path}
                                                render={() => (
                                                    <Container>
                                                        <StyledLink to="/">
                                                            You are on this page: {route.title} !
                                                        </StyledLink>
                                                    </Container>
                                                )}
                                            />
                                        ))}
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        )
                    }}
                />
            </StyledApp>
        </BrowserRouter>
    );
}

export default App;
