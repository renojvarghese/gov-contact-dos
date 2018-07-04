import React, { Component } from "react";
import "./App.css";
import { SearchFormContainer } from "./components/SearchFormContainer";
import { OfficialsContainer } from "./components/OfficialsContainer";
import { Header } from "./components/Header";
import { PropTypes } from "prop-types";
class App extends Component {
    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);
        this.state = {
            res: null,
            error: false
        };
    }
    getData(res) {
        if (res.error) {
            this.context.store.dispatch({
                type: "ERROR",
                data: res
            });
            return this.setState({
                error: true
            });
        }
        this.context.store.dispatch({
            type: "NEW_STATE",
            data: res
        });
        this.setState({
            data: true
        });
    }
    render() {
        const data = this.state.res;
        return (
            <div className="app">
                <Header />
                <SearchFormContainer handleData={this.getData} />

                {this.state.data ? (
                    <OfficialsContainer store={this.props.store} />
                ) : (
                    ""
                )}
            </div>
        );
    }
}
App.contextTypes = {
    store: PropTypes.object
};
export default App;
