import React, { Component } from 'react';
import { SearchForm } from './SearchForm';

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
    // this.props.handleData(res);
    this.props.store.dispatch({
      type: 'NEW_STATE',
      data: res
    });
  }
  searchByAddress(address, callback) {
    let gapi = this.state.gapi;
    let req = gapi.client.request({
      path: '/civicinfo/v2/representatives',
      params: { address: address }
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
    console.log(this.props.store.getState());
    return (
      <div className="search-form-container">
        <SearchForm
          query={this.state.query}
          handleChange={this.handleChange}
          handleSubmit={this.handleSearch}
        />
      </div>
    );
  }
}
