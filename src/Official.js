import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Official extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{JSON.stringify(this.props.official, null, 2)}</div>;
  }
}
Official.propTypes = {
  position: PropTypes.string.isRequired,
  official: PropTypes.object.isRequired
};
