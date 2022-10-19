import React from 'react';
import './App.css';
import Header from './components/Header'
import Table from './components/Table/'
import * as data from './data.json'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header title="My Product List" />
        <Table data={data.productList}/>
      </div>
    );
  }
}

export default App;


 
 






