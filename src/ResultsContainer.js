import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Office } from './Office';
import { Official } from './Official';
export class ResultsContainer extends Component {
    constructor(props) {
        super(props);
    }
    get officialData() {

        return this.props.offices.map( (office, i) => {
            return office.officialIndices.map( (index, j) => {
                return <Official key={"official_" + i + "_" + j}
                        position={office.name}
                        official={this.props.officials[index]}/>
            }

            )
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
