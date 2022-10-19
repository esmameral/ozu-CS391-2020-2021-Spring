import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Products</h1>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <th><img src={require('./images/tablet.jpg').default} alt="img-nn" width="100" height="100"/></th>
							<th>10-Inch Tablet</th>
              <th>269</th>
              <th>Android 4.3 Jelly Bean, 10.1-inch Full HD (1920 x 1200) Display</th>
            </tr>
            <tr>
              <th><img src={require('./images/shoe.jpg').default} alt="img-shoe" width="100" height="100" /></th>
              <th>Running Shoe</th>
              <th>48</th>
              <th>Synthetic and Mesh, Imported, Rubber sole, Flex Film welded upper, HydraMAX moisture-wicking collar lining</th>
            </tr>
            <tr>
              <th><img src={require('./images/watch.jpg').default} alt="img-watch" width="100" height="100" /></th>
              <th>Slim Bracelet Watch</th>
              <th>27</th>
              <th>A narrow gold-tone bracelet supports the round case of this  watch, which features three rhinestones marking each hour and a sparkling halo on the bezel</th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
