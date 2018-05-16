import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Office } from './Office';

export class ResultsContainer extends Component {
    constructor(props) {
        super(props);
    }
    get officialData() {

        this.props.offices.map( (office, i) => {
            <Office office={office}
                officials={this.props.officials}/>
        });

    }
    render() {

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
