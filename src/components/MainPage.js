import React, { Component } from 'react';
import {StyledLink} from "../styledComponents/styledComponents";
import styled from 'styled-components';

const Container = styled('div')`
    width: 50vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

class MainPage extends Component {
    render () {
        const {routes} = this.props;

        return (
            <Container>
                {routes.map(route =>(
                    <div key={route.path}>
                        <StyledLink to={route.path}>{route.title}</StyledLink>
                    </div>
                ))}
            </Container>
        )
    }
}

export default MainPage;
