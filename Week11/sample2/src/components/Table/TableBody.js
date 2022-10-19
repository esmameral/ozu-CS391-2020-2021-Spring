import React from 'react';
import images from '../../images/index.js';
import Thumbnail from '../Thumbnail'
class TableBody extends React.Component {

  //<td><img src={require('../../images/tablet.jpg').default} alt="img-nn" width="100" height="100" /></td>
  render() {
    return (
      <tbody>
        {this.props.list.map((item, index) => {
          return (
            <tr>
              <td><Thumbnail src={images[item.img]} alt={item.alt} /></td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
            </tr>

          );
        })}
      </tbody>);
  }
}



export default TableBody;
