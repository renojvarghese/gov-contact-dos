import React, { Component } from 'react';
import { Results } from './Results';

export class ResultsContainer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.data);
        return (
            <div>HELLO</div>
            );
    }
}
