import React from 'react';
import Heading from '../../components/Heading'
import Table from '../../components/Table'
import Form from '../../components/Form'

import * as data from '../../data.json';
import '../../App.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        productList: data.productList
    }
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
}
onDelete(index) {
    const { productList } = this.state;
    this.setState({ productList: productList.filter(
      (product, i)=> {
        return i !== index;
    }) });
}

onAdd(product) {
  let  { productList } = this.state;
  productList.push(product);
  this.setState({ productList });
}

  render() {
    return (
      <div className="App">
        <Heading  title="My Product List"/>
        <Form onSubmit={this.onAdd}/>
        <Table data={this.state.productList} onDelete={this.onDelete} />
        
      </div>
    );
  }
}

export default Home;
