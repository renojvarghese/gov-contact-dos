import React, { Component } from "react";

export class SearchForm extends Component {
    render() {
        let query = "";
        return (
            <section id="search-form">
                <form
                    className="search-form"
                    onSubmit={e => {
                        e.preventDefault();
                        this.props.onSubmit(query);
                    }}
                >
                    <label className="visuallyhidden" htmlFor="search">
                        Enter address
                    </label>
                    <input
                        type="text"
                        onChange={input => {
                            query = input.target.value;
                        }}
                        name="address"
                        placeholder="Enter your zipcode"
                        className="search-input"
                        id="search"
                    />

                    <button
                        type="submit"
                        className="submit-btn"
                        name="search-by-address"
                    >
                        Submit
                    </button>
                    <div className="error-box">
                        {this.props.error
                            ? "Sorry. Something went wrong. Please double check the address"
                            : " "}
                    </div>
                </form>
            </section>
        );
    }
}
