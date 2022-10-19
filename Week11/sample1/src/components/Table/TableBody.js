import React from 'react';
class TableBody extends React.Component {
  render() {
    return (
      <tbody>
        <tr>
          <td><img src={require('../../images/tablet.jpg').default} alt="img-nn" width="100" height="100" /></td>
          <td>10-Inch Tablet</td>
          <td>269</td>
          <td>Android 4.3 Jelly Bean, 10.1-inch Full HD (1920 x 1200) Display</td>
        </tr>
        <tr>
          <td><img src={require('../../images/shoe.jpg').default} alt="img-shoe" width="100" height="100" /></td>
          <td>Running Shoe</td>
          <td>48</td>
          <td>Synthetic and Mesh, Imported, Rubber sole, Flex Film welded upper, HydraMAX moisture-wicking collar lining</td>
        </tr>
        <tr>
          <td><img src={require('../../images/watch.jpg').default} alt="img-watch" width="100" height="100" /></td>
          <td>Slim Bracelet Watch</td>
          <td>27</td>
          <td>A narrow gold-tone bracelet supports the round case of this  watch, which features three rhinestones marking each hour and a sparkling halo on the bezel</td>
        </tr>
      </tbody>

    )
  }
}

export default TableBody;
