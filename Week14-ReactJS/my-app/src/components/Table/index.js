
import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';
export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterValue: ""
        };
    }

    render() {
        const { data, onDelete } = this.props;

        return (
            <div>

                <b>Price:</b><input onChange={e => this.setState({ filterValue: e.target.value })} />
                <button onClick={() => this.props.onFilter(this.state.filterValue)}>
                    <i>Filter</i>
                </button>
                <table>
                    <TableHeader />
                    <TableBody list={data} onDelete={onDelete} />
                </table>
            </div>
        );
    }
}

