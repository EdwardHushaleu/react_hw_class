import React from 'react';

class Action extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.props.plusCounte(true)
                }}>
                    Click +
                </button>
                <button onClick={() => {
                    this.props.plusCounte(false)
                }}>
                    Click -
                </button>
            </div>
        )
    }
}

export default Action
