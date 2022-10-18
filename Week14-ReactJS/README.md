# Using Rest Services


## Install json-server 

Run `npm install -g json-server` for installing json-server


- create a folder named `fake-server'

- create products.json file under that folder:
```json
  {
  "products": [ 
        {
            "id":1,
            "img": "tablet",
            "alt": "img-tablet",
            "name": "10-Inch Tablet",
            "price": "269",
            "description": "Android 4.3 Jelly Bean, 10.1-inch Full HD (1920 x 1200) Display"
        },
        {
            "id":2,
            "img": "shoe",
            "alt": "img-shoe",
            "name": "Running Shoe",
            "price": "48",
            "description": "Synthetic and Mesh, Imported, Rubber sole, Flex Film welded upper, HydraMAX moisture-wicking collar lining"
        },
        {
            "id":3,
            "img": "watch",
            "alt": "img-watch",
            "name": "Slim Bracelet Watch",
            "price": "27",
            "description": "A narrow gold-tone bracelet supports the round case of this  watch, which features three rhinestones marking each hour and a sparkling halo on the bezel"
        }
	]
}
```

- open a terminal window and type `json-server --watch products.json`
- Your fake  server will be started. If you see that information on the screen, you can make rest requests to the server
  
```
Loading products.json
  Done

  Resources
  http://localhost:3000/products

  Home
  http://localhost:3000

  Type s + enter at any time to create a snapshot of the database
  Watching...
```

- Try following URLs:
  - [http://localhost:3000/products](http://localhost:3000/products)
  - [http://localhost:3000/products/1](http://localhost:3000/products/1)
  
## Install and initialize Axios 

- First of all you need to install axios with using that command: `npm install axios`

- Open your Home component and change import section as follows:
  - **Add this line** => import axios from 'axios';
  - **Delete this line** => import * as data from '../../data.json';
  
-  initialize axios with an instance. Add following constant before the class definition

  ```
   const api=axios.create({baseURL:`http://localhost:3000/products`});
  ```

- Change state value as follows:
```
  this.state = {
      productList: []
    }
```
### GET Request with Axios
Add following lines into the constructor:
```
api.get('/').then(res => {
      const productList = res.data;
      this.setState({ productList });
    })
```



### DELETE Request with Axios
  - Change the content of the onDelete function as shown below:

```
onDelete(id, index) {
    api.delete(`/${id}`)
      .then(res => {
        const { productList } = this.state;
        this.setState({
          productList: productList.filter(
            (id,i) => {
              return i !== index;
            })
        });
      })

  }
```
Notice the input parameters of the onDelete method. We should send id value from the TableBody component.

- Open TableBody component and change content of the Delete button as shown below:

```
    <button onClick={() => this.props.onDelete(item.id,index)}>
                <i>DeleteNew</i>
    </button>
```

Notice the parameters of the method.

- Now you can test your delete operation.

### POST Request with Axios

- Open the Home component and change content of the onAdd function as shown below:

```
  onAdd(product) {
    api.post(`/`, product)
      .then(res => {
        let { productList } = this.state;
        productList.push(res.data);
        this.setState({ productList });

      })
  }
```
- Now you can test your add operation.
- You can also delete the data.json file from the project folder.

### Using Query String with Get Request
Suppose that we want to filter products by price. Then we need to use a URL similar to that one:

[http://localhost:3000/products?price=100](http://localhost:3000/products?price=100)

Optional parameters tend to be easier to put in the query string.

If you want to return a 404 error when the parameter value does not correspond to an existing resource then I would tend towards a path segment parameter. e.g. /products/232 where 232 is not a valid product id.

If however you want to return an empty list then when the parameter is not found then I suggest using query string parameters. e.g. /contacts?name=deniz

- First of all, we should add a function that use query string. Open Home component and add following function:

```
filterProducts = (param) => {
    if (param === "") {
      this.getProducts();
    } else {
      api.get(`?price=${param}`).then(res => {
        const productList = res.data;
        this.setState({ productList });
      }
      );
    }
  }
```
This function will add "price=999" query string to the URL if `param` is not empty.

- Add this function as `props` parameter while calling the `Table` component:

``` <Table data={this.state.productList} onDelete={this.onDelete} onFilter={this.filterProducts} />```

- Open `Table` component and add a button and input item for filtering. Add these lines before `<table>...</table>`:

```
    <b>Price:</b><input onChange={e => this.setState({ filterValue: e.target.value })} />
    <button onClick={() => this.props.onFilter(this.state.filterValue)}>
                    <i>Filter</i>
    </button>
```

- Test your changes

