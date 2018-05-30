import React, { Component } from 'react';
import './App.css';
import { SearchFormContainer } from './SearchFormContainer';
import { OfficialsContainer } from './OfficialsContainer';
import { PropTypes } from 'prop-types';
class App extends Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.state = {
      res: null,
      error: false
    };
  }
  componentDidMount() {
    this.unsubscribe = this.context.store.subscribe(() => {
      this.forceUpdate();
    });
  }
  getData(res) {
    if (res.error) {
      return this.setState({
        error: true
      });
    }
    this.context.store.dispatch({
      type: 'NEW_STATE',
      data: res
    });
    this.setState({
      data: true
    });
  }
  render() {
    const data = this.state.res;
    return (
      <div className="App">
        <header className="app-header">
          <h1 className="app-title">App Name TBD</h1>
          <p className="app-desc">app desc TBD</p>
        </header>
        <SearchFormContainer
          store={this.props.store}
          handleData={this.getData}
        />

        {this.state.data ? <OfficialsContainer store={this.props.store} /> : ''}
      </div>
    );
  }
}
App.contextTypes = {
  store: PropTypes.object
};
export default App;
