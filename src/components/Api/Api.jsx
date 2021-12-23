import React from 'react';


class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        fetch('https://randomuser.me/api')
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    items: result.results,
                });
            },
            )
    }

    render() {
        const items = this.state;
        debugger
        return (
            <ul>
                {items.map(item => (
                    <li key={item.email}>
                        {item.cell}
                    </li>
                ))}
            </ul>
        )
    }
}

export default Nav