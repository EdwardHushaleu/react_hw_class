import React from 'react';
import { Link } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div>
                <Link to = "/counter">Counter</Link>
                <Link to = "/api">Api</Link>
            </div>
        )
    }
}

export default Nav