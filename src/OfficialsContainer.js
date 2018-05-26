import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Official } from './Official';

export class OfficialsContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() => {
      this.forceUpdate();
    });
  }
  get officialData() {
    return this.props.offices.map((office, i) => {
      return office.officialIndices.map((index, j) => {
        return (
          <Official
            key={'official_' + i + '_' + j}
            position={office.name}
            official={this.props.officials[index]}
          />
        );
      });
    });
  }
  render() {
    console.log(this.props.store.getState());
    return <div className="official-container">{this.officialData}</div>;
  }
}

OfficialsContainer.propTypes = {
  address: PropTypes.object.isRequired,
  divisions: PropTypes.object.isRequired,
  offices: PropTypes.array.isRequired,
  officials: PropTypes.array.isRequired
};
