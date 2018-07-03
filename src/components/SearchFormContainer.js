import React, { Component } from 'react';
import { SearchForm } from './SearchForm';
import { PropTypes } from 'prop-types';
import cred from './config';
const API_KEY = cred.key;

export class SearchFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gapiReady: false,
      gapi: null,
      query: null,
      res: null
    };
    this.loadgapi = this.loadgapi.bind(this);
    this.readRes = this.readRes.bind(this);
    this.searchByAddress = this.searchByAddress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() => {
      this.forceUpdate();
    });
  }
  loadgapi() {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/client.js';
    script.onload = () => {
      let gapi = window.gapi;
      gapi.load('client', () => {
        gapi.client.setApiKey(API_KEY);

        this.setState({
          gapiReady: true,
          gapi: gapi
        });
      });
    };

    document.body.appendChild(script);
  }
  readRes(res, raw) {
    this.props.handleData(res);
  }
  searchByAddress(address, callback) {
    let gapi = this.state.gapi;
    let req = gapi.client.request({
      path: '/civicinfo/v2/representatives',
      params: {
        address: address
      }
    });
    req.execute(callback);
  }
  handleChange(e) {
    this.setState({
      query: e.target.value
    });
  }
  handleSearch(e) {
    e.preventDefault();
    this.searchByAddress(this.state.query, this.readRes);
  }
  componentDidMount() {
    this.loadgapi();
  }
  render() {
    let error = this.context.store.getState().error;
    return (
      <div className="search-form-container">
        <div className="search-form-instruction">
          <h2 className="search-form-heading">Find Your Representatives</h2>
        </div>
        <SearchForm
          error={error}
          query={this.state.query}
          handleChange={this.handleChange}
          handleSubmit={this.handleSearch}
        />
      </div>
    );
  }
}
SearchFormContainer.contextTypes = {
  store: PropTypes.object
};
