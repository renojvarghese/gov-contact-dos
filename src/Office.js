import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Official } from './Official';

export class Office extends Component {

    get officials() {
        return this.props.office.officialIndices.map(index => {
            return (
                <Official position={this.props.office.name}
                official={this.props.officials[index]}/>
            )
        })
    }

    render() {
        return (
            <div>
                {this.officials}
            </div>
        )
    }

}
Office.propTypes = {
    office: PropTypes.object.isRequired,
    officials: PropTypes.array.isRequired
}
