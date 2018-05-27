import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Official extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="img-container">
          <img src={this.props.official.photoUrl} />
        </div>
        <div className="name">{this.props.official.name}</div>
        <div className="office-name">{this.props.official.officeName}</div>
        {
          // {JSON.stringify(this.props.official, null, 2)}}
        }
      </div>
    );
  }
}
Official.propTypes = {
  official: PropTypes.object.isRequired
};
