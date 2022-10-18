# Quick Start

Create React App is Facebook's officially supported way to create single-page React applications. It offers a modern build setup with no configuration. You don’t need to install or configure tools like Webpack or Babel.

### Getting Started


Run the following commands. It will create an empty React application and start it.

```sh
npx create-react-app my-app
cd my-app
npm start
```

Running **npx create-react-app my-app**  command will create a directory called my-app inside the current folder. 

Inside the newly created project, you can run **npm start**, that will run the app in development mode.

### Adding Some Content

Following is the initial content od the project. Modify `App.js` with the following content to see the instant result. You should also add the images folder from the solution project.

```sh
import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Products</h1>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td><img src={require('./images/tablet.jpg').default} alt="img-nn" width="100" height="100"/></td>
							<td>10-Inch Tablet</td>
              <td>269</td>
              <td>Android 4.3 Jelly Bean, 10.1-inch Full HD (1920 x 1200) Display</td>
            </tr>
            <tr>
              <td><img src={require('./images/shoe.jpg').default} alt="img-shoe" width="100" height="100" /></td>
              <td>Running Shoe</td>
              <td>48</td>
              <td>Synthetic and Mesh, Imported, Rubber sole, Flex Film welded upper, HydraMAX moisture-wicking collar lining</td>
            </tr>
            <tr>
              <td><img src={require('./images/watch.jpg').default} alt="img-watch" width="100" height="100" /></td>
              <td>Slim Bracelet Watch</td>
              <td>27</td>
              <td>A narrow gold-tone bracelet supports the round case of this  watch, which features three rhinestones marking each hour and a sparkling halo on the bezel</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

```

# Components

### Creating Our First Component

Create a folder named `components` inside the `src` folder. This folder will basically contain our UI components. 

Inside this folder, create a file named `Heading.js` with the following content

```sh
import React from 'react';

class Heading extends React.Component {
    render() {    
        return <h1 className="text-center">Products</h1>;
    }
}

export default Heading;
```

It's all done and now you can use the component wherever you need. Just import the component in App.js:

`import Heading from './components/Heading'`

And within the `render` method, you can use the component:

`<Heading />`

### Creating Further Components

For this project, we'll make a `Table` component, which is composed of a `TableHeader` and `TableBody` component. Therefore, this component will require more than one file. Create a folder named `Table` inside the `components` folder, and add the following files:

```sh
components
├── Table
│   ├── index.js
│   ├── TableHeader.js
│   ├── TableBody.js
│   └── style.css
```

Add the following content to `TableHeader` component(**TableHeader.js**):


```sh
import React from 'react';

class TableHeader extends React.Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>
            </thead>);
    }
}

export default TableHeader;
```

And add the following content to `TableBody` component(**TableBody.js**):

```sh
import React from 'react';

class TableBody extends React.Component {
    render() {
        return (
             <tbody>
            <tr>
            <td><img src={require('../../images/tablet.jpg').default} alt="img-nn" width="100" height="100"/></td>
							<td>10-Inch Tablet</td>
              <td>269</td>
              <td>Android 4.3 Jelly Bean, 10.1-inch Full HD (1920 x 1200) Display</td>
            </tr>
            <tr>
              <td><img src={require('../../images/shoe.jpg').default} alt="img-shoe" width="100" height="100" /></td>
              <td>Running Shoe</td>
              <td>48</td>
              <td>Synthetic and Mesh, Imported, Rubber sole, Flex Film welded upper, HydraMAX moisture-wicking collar lining</td>
            </tr>
            <tr>
              <td><img src={require('../../images/watch.jpg').default} alt="img-watch" width="100" height="100" /></td>
              <td>Slim Bracelet Watch</td>
              <td>27</td>
              <td>A narrow gold-tone bracelet supports the round case of this  watch, which features three rhinestones marking each hour and a sparkling halo on the bezel</td>
            </tr>
          </tbody>);
    }
}

export default TableBody;
```
Add formatting rules for your table. Open `style.css` file and edit content as follows:
```
tr {
    background-color: #FFFFFF;
  }
  
  th {
    font-family: 'Open Sans', sans-serif;
    color: #111111;
    padding: 10px;
    font-weight: 600;
  }
  
  td {
    font-family: 'Open Sans', sans-serif;
    color: #111111;
    padding: 10px;
    font-weight: 300;
    text-align: center;
  }
  
  table {
    border: 1px solid #DDDDDD;
    border-radius: 2px;
    border-spacing: 0
  }
  
  tbody tr:nth-child(odd) {
    background-color: #EEEEEE;
  }
  ```
  
Now we're ready to use these sub-components in our main `Table` component. Just import and add these components(**Table/index.js**):

```
import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import './style.css'

export default class Table extends React.Component {
    render() {
        return (
            <table>
                <TableHeader />
                <TableBody />
            </table>
        );
    }
}
```

Edit `App.css` content as follows: 
```
h1 {
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  color: #111111;
}

.App {
  padding: 10px;
}

.text-center {
  text-align: center;
}

```

That's all. Now `Table` component can be used in App.js:

```
import React, { Component } from 'react';
import Heading from './components/Heading'
import Table from './components/Table'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Table />
      </div>
    );
  }
}

export default App;
```
# Props

### Adding props to a component

We can define whatever name we want to use for a prop. In the `App.js`, send a prop named `title` to the `Heading` component

```html
<Heading title="Products"/>
```

Within the component, props can be accessed via `props` keyword. Modify `Heading` component as follows, so that it will display whatever text is sent via props:

```js
import React from 'react';

class Heading extends React.Component {
    render() {
        return <h1 className="text-center">{this.props.title}</h1>;
    }
}

export default Heading;
```

It's all done. Sending a prop to a component, and accessing a prop from inside the component are the basic steps.
### Adding more props

In the same fashion, let's add more props. Table component should get its data from props. Therefore, we import data from json file in the `App.js` for this tutorial.

```js
import * as data from './data.json';
```

And then, this data can be sent to `Table` through props:

```html
<Table data={data.productList} />
```

In the `Table/index.js`, the component can directly send the data to `TableBody`

```js
import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import './style.css'

export default class Table extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <table>
                <TableHeader />
                <TableBody list={data}/>
            </table>
        );
    }
}
```
Finally in the `TableBody.js` file, data can be retrieved from props. With the help of [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) function, table rows will be rendered with iteration over the list.


```js
import React from 'react';
import Thumbnail from '../Thumbnail';
import images from '../../images/index';

export default class TableBody extends React.Component {
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
                        </tr>
                    );
                })}
            </tbody>);
    }
}
```

## Thumbnail

There is one more component here named `Thumbnail`, which has a predefined size and style for showing the images. It has two props; `src` and `alt` needed for each image:

```js
import React from 'react';

class Thumbnail extends React.Component {
    render() {
        return <img src={this.props.src} alt={this.props.alt} width="100" height="100"/>
    }
}

export default Thumbnail;
```

To get images as dynamically from images folder. Create `index.js` file under **images** folder.

```js
const tablet = require('./tablet.jpg').default;
const shoe = require('./shoe.jpg').default;
const watch = require('./watch.jpg').default;

const images = {
    tablet, shoe, watch
};

export default images;
```
