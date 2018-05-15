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
      console.log(res);
      this.setState({
          res: res
      });
  }
  render() {
    return (
      <div className="App">
        <SearchForm handleData={this.getData}/>
        <Results data=this.state.res/>
      </div>
    );
  }
}

export default App;
