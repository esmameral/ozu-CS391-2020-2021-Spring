# State

### Adding state to a component

Define the initial state within the `App` component's constructor:

```js
constructor(props) {
    super(props);
    this.state = {
        productList: data.productList
    }
}
```

The `App` component now can access this data through its state, and send it to the `Table` component.

```html
<Table data={this.state.productList} />
```

### Handling state changes

In this part, deleting an item from the list and updating the UI through state will be covered.

* In `TableBody.js`, add a button for deleting an item to each table row. This button basically calls the prop `onDelete` method with tihe right index parameter when clicked.

```html
<td>
    <button onClick={() => this.props.onDelete(index)}>
        <i>Delete</i>
    </button>
</td>
```

* Table component will directly pass `onDelete` method to `TableBody`. Note how it is retrieved from props and passed to the component in the `index.js` of `Table` component:

```
export default class Table extends React.Component {
    render() {
        const { data, onDelete } = this.props;
        return (
            <table>
                <TableHeader />
                <TableBody list={data} onDelete={onDelete}/>
            </table>
        );
    }
}
```

* The next step is creating the actual `onDelete` method in the `App.js` and handling state change within this method. The following method basically uses [filter](https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method to eliminate the item to be deleted. The filtered new list is assigned to the state via `setState()` method. As mentioned earlier, setState will re-render the component, thus updating the view with the new list.

```js
onDelete(index) {
    const { productList } = this.state;
    this.setState({ productList: productList.filter((product, i)=> {
        return i !== index;
    }) });
}
```

* An important point here is that the method shoud be bound to the component instance, in order to use `this` keyword correctly. It's done via using `bind` on the method within the constructor:

```js
constructor(props) {
    super(props);
    this.state = {
        productList: data.productList
    }
    this.onDelete = this.onDelete.bind(this);
}
```

<br />
<br />

### Adding more state changes

In the same way deleting an item is implemented, adding an item will be handled too. For this, a `Form` component is implemented which also has a state inside:

```
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
```
* `Form` component has a state value `formOpen`, which is initially false. This value controls whether the modal will be opened or hidden. When the user clicks add icon, `setState` is called and formOpen is inverted, so that it becomes true, resulting the modal to open, and vice versa. The following line renders the modal or the button depending on the `formOpen` value:

`return this.state.formOpen ? form : button;`

* Input changes are handled via state. The initial value to be shown in an `input` is sent via value prop. At each change in the input, `onChange` prop is invoked. Thus, `setState` should be called in `onChange`, setting the new text to the state. Examine how the inputs are bound to the state in the following line:

`<input value={this.state.img} onChange={e => this.setState({ img: e.target.value })} />`

* When the user enters sufficient information, `this.props.onSubmit` method will be invoked with the product parameter that is composed with the values in the state as follows:

```js
onClick() {
    this.setState({ formOpen: !this.state.formOpen });
    const { img, name, price, description } = this.state;
    const product = { img, name, price, description };
    this.props.onSubmit(product);
}
```

* The next step is to add the `Form` component to `App.js`

```html
<div >
    <Heading title="Products" />
    <Table data={this.state.productList} onDelete={this.onDelete} />
    <Form onSubmit={this.onAdd}/>
</div>
```

* `onSubmit` will call `onAdd` method that is defined in `App.js`. This method basially gets the productList, pushes the new product and calls `setState`

```js
onAdd(product) {
    let  { productList } = this.state;
    productList.push(product);
    this.setState({ productList });
}
```

* Also, don't forget to bind the method in the constructor, since it's using `this`

`this.onAdd = this.onAdd.bind(this);`


