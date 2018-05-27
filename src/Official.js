import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Official extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const official = this.props.official;
    return (
      <div
        className={
          'card-container ' +
          (official.party === 'Republican'
            ? 'republican'
            : official.party === 'Democratic'
              ? 'democrat'
              : '')
        }
      >
        <div className="img-container">
          <img src={this.props.official.photoUrl} />
        </div>
        <div className="name">{this.props.official.name}</div>
        <div className="office-name">{this.props.official.officeName}</div>
      </div>
    );
  }
}
Official.propTypes = {
  official: PropTypes.object.isRequired
};
