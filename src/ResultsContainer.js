import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Results } from './Results';

export class ResultsContainer extends Component {
    constructor(props) {
        super(props);
    }
    get officialData() {

    }
    render() {

        return (
            <div>HELLO</div>
            );
    }
}

ResultsContainer.propTypes = {
    address: PropTypes.object,
    divisions: PropTypes.object,
    offices: PropTypes.array,
    officials: PropTypes.array
}
