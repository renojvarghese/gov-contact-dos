import React, { Component } from "react";
import "./App.css";
import SearchFormContainer from "./components/SearchFormContainer";
import OfficialsContainer from "./components/OfficialsContainer";
import { Header } from "./components/Header";
import { PropTypes } from "prop-types";
class App extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <SearchFormContainer />
                <OfficialsContainer />
            </div>
        );
    }
}
App.contextTypes = {
    store: PropTypes.object
};
export default App;
