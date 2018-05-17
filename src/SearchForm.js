
import React, { Component } from 'react';

export class SearchForm extends Component {
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <form className="search-form" onSubmit={this.props.handleSubmit}>
                    <input type="text" onChange={this.props.handleChange} name="query" className="search-input" id="search"></input>
                    <button type="submit" className="submit-btn" >Submit</button>
                </form>
            </div>
        );
    }
}
