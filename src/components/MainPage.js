import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainPage extends Component {
    render () {
        const {routes} = this.props;

        return (
            <div className="container">
                {routes.map(route =>(
                    <div className="link-box" key={route.path}>
                        <Link className="link" to={route.path}>{route.title}</Link>
                    </div>
                ))}
            </div>
        )
    }
}

export default MainPage;
