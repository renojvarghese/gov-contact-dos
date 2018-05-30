import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Official extends Component {
  constructor(props) {
    super(props);
    this.state = { imageStatus: 'loading' };
  }

  handleImageLoaded() {
    this.setState({ imageStatus: 'loaded' });
  }

  handleImageErrored() {
    this.setState({ imageStatus: 'failed to load' });
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
        <div className={'img-container ' + this.state.imageStatus}>
          <img
            src={this.props.official.photoUrl}
            onLoad={this.handleImageLoaded.bind(this)}
            onError={this.handleImageErrored.bind(this)}
          />
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
