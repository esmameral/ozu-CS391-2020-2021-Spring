import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formOpen: false,
            img: '',
            name: '',
            price: '',
            description: ''
        };
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        this.setState({ formOpen: !this.state.formOpen });
        const { img, name, price, description } = this.state;
        const product = { img, name, price, description };
        this.props.onSubmit(product);
    }
    render() {
       const button = <button onClick={() => { this.setState({ formOpen: !this.state.formOpen })}}>
            <i>Add</i>
           </button>;
        const form = (
            <div>
                <label>Image</label><input value={this.state.img} onChange={e => this.setState({ img: e.target.value })} />
                <label>Name</label><input value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                <label>Price</label><input value={this.state.price} onChange={e => this.setState({ price: e.target.value })} />
                <label>Description</label><input value={this.state.decription} onChange={e => this.setState({ description: e.target.value })} />
                <button onClick={this.onClick}>Add</button></div>
            );
        return this.state.formOpen ? form : button;
    }
}