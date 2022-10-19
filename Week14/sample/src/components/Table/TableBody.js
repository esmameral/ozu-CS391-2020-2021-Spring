import React from 'react';
import images from '../../images/index.js';
import Thumbnail from '../Thumbnail'
class TableBody extends React.Component {


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
              <td>
                <button onClick={() => this.props.onDelete(index)}>
                  <i>Delete</i>
                </button>
              </td>
            </tr>

          );
        })}
      </tbody>);
  }
}



export default TableBody;
