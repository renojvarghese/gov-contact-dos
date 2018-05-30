import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Official } from './Official';

export class OfficialsContainer extends Component {
  constructor(props) {
    super(props);
  }

  get officialData() {
    return this.context.store.getState().map((official, index) => {
      return <Official key={'official_' + index} official={official} />;
    });
  }
  render() {
    return <div className="officials-container">{this.officialData}</div>;
  }
}

OfficialsContainer.contextTypes = {
  store: PropTypes.object
};
//
// OfficialsContainer.propTypes = {
//   address: PropTypes.object.isRequired,
//   divisions: PropTypes.object.isRequired,
//   offices: PropTypes.array.isRequired,
//   officials: PropTypes.array.isRequired
// };
