
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
            this.searchByAddress("", this.readRes);
          });
        };

        document.body.appendChild(script);
    }
    readRes(res, raw) {
        console.log(res);
        this.setState({
            res: res
        });
    }
    searchByAddress(address, callback) {
        let gapi = this.state.gapi;
        let req = gapi.client.request({
           'path' : '/civicinfo/v2/representatives',
           'params' : {'address' : address}
        });
        req.execute(this.readRes);
    }

    componentDidMount() {
        this.loadgapi();

    }
    get data() {
        if (!this.state.res)
            return "none";
        let data = this.state.res;
        return data.map(item => {
            return <div>item.toString()</div>;
        })
    }
    render() {
        return (
            <div>
                <h1>Hello</h1>

            </div>
        );
    }
}
