import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Official } from './Official';

export class OfficialsContainer extends Component {
  constructor(props) {
    super(props);
  }

  get officialData() {
    return this.context.store.getState().officials.map((official, index) => {
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
