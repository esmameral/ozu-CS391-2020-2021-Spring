import React from 'react';
import './styles.css';
import Thumbnail from '../Thumbnail';
import images from '../../images/index';
class TableBody extends React.Component {

    render() {
        const { list } = this.props;
        return (
            <tbody>
                {list.map((item, index) => {
                    return (
                        <tr key={`product-${index}`}>
                            <td><Thumbnail src={images[item.img]} alt={item.alt} /></td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td>
                                <button onClick={() => this.props.onDelete(item.id,index)}>
                                    <i>Delete</i>
                                </button>
                            </td>
                        </tr>
                    );
                })}


            </tbody>
        )
    }
}

export default TableBody;