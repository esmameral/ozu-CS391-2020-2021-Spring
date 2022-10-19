import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
class Table extends React.Component {
    render() {
        return (
            < table >
                <TableHeader/>
                <TableBody/>
            </table >
        );
    };
}

export default Table;