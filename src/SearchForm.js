
import React, { Component } from 'react';
import cred from "./config";
const API_KEY = cred.key;

export class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gapiReady: false,
            gapi: null,
            res: null
        }
        this.loadgapi = this.loadgapi.bind(this);
        this.readRes = this.readRes.bind(this);
        this.searchByAddress = this.searchByAddress.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    loadgapi() {
        const script = document.createElement("script");
        script.src = "https://apis.google.com/js/client.js";
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
           'path' : '/civicinfo/v2/representatives',
           'params' : {'address' : address}
        });
        req.execute(callback);
    }
    handleSearch(e) {
        e.preventDefault();
        const query = document.getElementById('search').value;
        this.searchByAddress(query, this.readRes)
    }
    componentDidMount() {
        this.loadgapi();

    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
                <form className="search-form" onSubmit={this.handleSearch}>
                <input type="text" name="query" className="search-input" id="search"></input>
                <button type="submit" className="submit-btn" >Submit</button>
                </form>
            </div>
        );
    }
}
