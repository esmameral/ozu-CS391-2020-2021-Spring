import React, { Component } from 'react';
import Heading from './components/Heading'
import Table from './components/Table'
import './App.css';
import * as data from './data.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading title="Products"/>
        <Table data={data.productList} />
      </div>
    );
  }
}

export default App;
