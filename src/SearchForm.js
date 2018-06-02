import React, { Component } from 'react';

export class SearchForm extends Component {
  render() {
    return (
      <div>
        <form className="search-form" onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            onChange={this.props.handleChange}
            name="query"
            className="search-input"
            id="search"
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
