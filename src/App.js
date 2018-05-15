import React, { Component } from 'react';
import './App.css';
import { SearchForm } from './SearchForm';
import { ResultsContainer } from './ResultsContainer';

class App extends Component {
  constructor(props) {
      super(props);
      this.getData = this.getData.bind(this);
      this.state = {
          res: null
      }
  }
  getData(res) {
      this.setState({
          res: res
      });
  }
  render() {
    return (
      <div className="App">
        <header className="app-header">
            <h1 className="app-title">
                App Name TBD
            </h1>
            <p className="app-desc">app desc TBD</p>
        </header>
        <SearchForm handleData={this.getData}/>
        <ResultsContainer data={this.state.res}/>
      </div>
    );
  }
}

export default App;
