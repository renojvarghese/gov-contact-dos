import React, { Component } from 'react';
import './App.css';
import { SearchFormContainer } from './SearchFormContainer';
import { OfficialsContainer } from './OfficialsContainer';

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
    this.unsubscribe = this.props.store.subscribe(() => {
      this.forceUpdate();
    });
  }
  getData(res) {
    if (res.error) {
      return this.setState({
        error: true
      });
    }
    this.props.store.dispatch({
      type: 'NEW_STATE',
      data: res
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
        {data ? (
          <OfficialsContainer
            store={this.props.store}
            address={data.normalizedInput}
            divisions={data.divisions}
            offices={data.offices}
            officials={data.officials}
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default App;
