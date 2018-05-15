import React, { Component, PropTypes } from 'react';

export class Results extends Component {
    constructor(props) {
        super(props);
        const official = this.props.official;
    }
    render() {
        return <div>{JSON.stringify(this.props.official, null, 2)}</div>
    }
}
Results.propTypes = {
    official: PropTypes.object
}
