import React from 'react';

class View extends React.Component {
    render() {
        return (
            <div>
                Clicks how much {this.props.counter}
            </div>
        )
    }
}

export default View