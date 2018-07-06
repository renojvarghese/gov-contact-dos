import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export class SearchForm extends Component {
    render() {
        return (
            <section id="search-form">
                <form
                    className="search-form"
                    onSubmit={this.props.handleSubmit}
                >
                    <label className="visuallyhidden" htmlFor="search">
                        Enter address
                    </label>
                    <input
                        type="text"
                        onChange={this.props.handleChange}
                        name="address"
                        placeholder="Enter your zipcode"
                        className="search-input"
                        id="search"
                    />

                    <AnchorLink href="#officials-results">
                        <button
                            type="submit"
                            className="submit-btn"
                            name="search-by-address"
                        >
                            Submit
                        </button>
                    </AnchorLink>
                    <div className="error-box">
                        {this.props.error
                            ? "Sorry. We cant't find that address."
                            : " "}
                    </div>
                </form>
            </section>
        );
    }
}
