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
          'card-container pop-up ' +
          (official.party === 'Republican'
            ? 'republican'
            : official.party === 'Democratic'
              ? 'democrat'
              : '')
        }
      >
        <div className="portrait-container">
          <div className={'img-container ' + this.state.imageStatus}>
            <img
              src={this.props.official.photoUrl}
              onLoad={this.handleImageLoaded.bind(this)}
              onError={this.handleImageErrored.bind(this)}
            />
          </div>
        </div>
        <div className="name">{this.props.official.name}</div>
        <div className="office-name">{this.props.official.officeName}</div>
        {this.props.official.emails
          ? this.props.official.emails.map((email, i) => {
              return (
                <div className="email" key={'email_' + i}>
                  <a className="email-link" href={'mailto:' + email}>
                    {email}
                  </a>
                </div>
              );
            })
          : ''}
        {this.props.official.phones
          ? this.props.official.phones.map((phone, i) => {
              return (
                <div className="phone" key={'phone_' + i}>
                  <span className="phone-link">{phone}</span>
                </div>
              );
            })
          : ''}
      </div>
    );
  }
}
Official.propTypes = {
  official: PropTypes.object.isRequired
};
