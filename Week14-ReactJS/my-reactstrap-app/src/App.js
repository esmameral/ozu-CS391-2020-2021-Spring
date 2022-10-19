import React from 'react';
import ProductTable from './components/ProductTable'
import './App.css';
import * as data from './data.json';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: data.productList
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1>reactstrap Container, Row, Col, Media, Button example</h1>
          <ProductTable data={this.state.productList}></ProductTable>
        </header>
      </div>
    );
  }
}
export default App;
