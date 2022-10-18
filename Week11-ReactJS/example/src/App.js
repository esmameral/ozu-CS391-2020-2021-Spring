import React from 'react';

import Counter from './components/Counter'
import Sample from './components/Sample'
import './App.css';


class App extends React.Component {
  

  render() {
    return (
      <div className="App">
        <Counter/>
        <Sample/>
      </div>
    );
  }
}

export default App;
