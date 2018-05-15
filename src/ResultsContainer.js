import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Results } from './Results';

export class ResultsContainer extends Component {
    constructor(props) {
        super(props);
    }
    get officialData() {
        let rendered;
        let { divisions, offices, officials } = this.state;
        for (let key in divisions) {
            let division = division[key];

        }
        return (
            <div>
            {rendered}
            </div>
        )
    }
    render() {
        if (!this.props.shouldRender) {
            return (<div className="official-container empty"></div>);
        }
        return (
            <div className="official-container">
                {this.officialData}
            </div>
            );
    }
}

ResultsContainer.propTypes = {
    address: PropTypes.object,
    divisions: PropTypes.object,
    offices: PropTypes.array,
    officials: PropTypes.array
}
