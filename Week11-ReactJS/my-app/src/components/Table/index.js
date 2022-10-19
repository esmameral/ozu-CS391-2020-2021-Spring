
import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';
export default class Table extends React.Component {
    render() {
        const {data, onDelete}=this.props;
        return (
            <table>
                <TableHeader />
                <TableBody list={data} onDelete={onDelete}/>
            </table>
        );
    }
}