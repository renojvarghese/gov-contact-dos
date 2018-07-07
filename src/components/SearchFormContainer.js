import React, { Component } from "react";
import { SearchForm } from "./SearchForm";
import { connect } from "react-redux";
const API_KEY = process.env.REACT_APP_API_KEY;
const url =
    "https://www.googleapis.com/civicinfo/v2/representatives?key=" +
    API_KEY +
    "&address=";

const SearchFormContainer = ({ error, onSubmit }) => {
    return (
        <div className="search-form-container">
            <div className="search-form-instruction">
                <h2 className="search-form-heading">
                    Find Your Representatives
                </h2>
            </div>
            <SearchForm error={error} onSubmit={onSubmit} />
        </div>
    );
};
const mapStateToProps = state => {
    return {
        error: state.error
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onSubmit: query => {
            fetch(url + query)
                .then(response => {
                    if (!response.ok) {
                        throw Error(response.statusText);
                    } else {
                        return response.json();
                    }
                })
                .then(json => {
                    dispatch({
                        type: "NEW_OFFICIALS",
                        data: json
                    });
                })
                .catch(err => {
                    dispatch({
                        type: "ERROR"
                    });
                });
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(
    SearchFormContainer
);
