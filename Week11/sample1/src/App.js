import React from 'react';
import './App.css';
import Header from './components/Header'
import Table from './components/Table/'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Table />
      </div>
    );
  }
}

export default App;
