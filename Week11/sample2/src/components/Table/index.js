import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
class Table extends React.Component {
    render() {
        return (
            < table >
                <TableHeader/>
                <TableBody list={this.props.data}/>
            </table >
        );
    };
}

export default Table;