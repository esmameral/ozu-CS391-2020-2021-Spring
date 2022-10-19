1. [Routing Example](#routing-example)
2. [Bootstrap with ReactJS (strapboot)](#bootstrap-with-reactjs)

# Routing Example 


## Getting Started

Copy Week12's project into your workspace. 

Before starting, run `npm i`, which will download all packages defined in the `package.json`.
Run `npm install react-router-dom` for installing react-router


## Creating Different Pages

The first step is to create some pages in order to navigate between different pages.
Pages are stored under `containers` directory. Create a folder names `containers` inside `src`, and add the following pages inside:

```
containers
├── About
│   └── index.js
├── Contact
│   └── index.js
├── Home
│   └── index.js
```

### About/index.js

Add the following content to `About` page

```
import React from 'react';
import Header from '../../components/Header'

export default class About extends React.Component {
    render() {
		return <Header title="About" />;
	}
}
```

### Contact/index.js

Add the following content to `Contact` page

```
import React from 'react';
import Header from '../../components/Header'

export default class Contact extends React.Component {
    render() {
		return <Header title="Contact" />;
	}
}
```

### Home/index.js

Copy the content of `App.js` to `Home` page. `App.js` will handle route definition and changes.

```
import React from 'react';
import Header from '../../components/Header'
import Table from '../../components/Table'
import Form from '../../components/Form'
import * as data from '../../data.json';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			productList: data.productList
		}
		this.onDelete = this.onDelete.bind(this);
		this.onAdd = this.onAdd.bind(this);
	}

	onDelete(index) {
		let productList = this.state.productList;
		productList.splice(index, 1);
		this.setState({ productList });
	}

	onAdd(product) {
		let productList = this.state.productList;
		productList.push(product);
		this.setState({ productList });
	}

	render() {
		return (
			<div className="home-container">
				<Heading title="Products" />
				<Table data={this.state.productList} onDelete={this.onDelete} />
				<Form onSubmit={this.onAdd}/>
			</div>
		);
	}
}
```
### Integrating react-router-dom

* Add the following imports to `App.js`

```
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './containers/Home'
import About from './containers/About'
import Contact from './containers/Contact'
```

* Routes are defined with the `Route` component:

`<Route exact path="/about" component={About} />`

* In order to navigate to a route, `Link` component is used: 

`<Link to="/about">ABOUT</Link>`

* Below is the final content of `App.js`, where there is a navigation menu and routes together:

```
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './containers/Home'
import About from './containers/About'
import Contact from './containers/Contact'
import NotFound from './containers/NotFound'
import './App.css';

class App extends Component {

	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<div className="menu">
						<ul>
							<li>
								<Link to="/">HOME</Link>
							</li>
							<li>
								<Link to="/about">ABOUT</Link>
							</li>
							<li>
								<Link to="/contact">CONTACT</Link>
							</li>
						</ul>
					</div>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/contact" component={Contact} />
						<Route path="*" component={NotFound} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
```

`exact` prop means that the route will be navigated when the path is exactly matched.

* Finally, create a `NotFound` page, which is among routes and will be navigated by the paths other than the defined ones.

```
import React from 'react';
import Header from '../../components/Header'

export default class NotFound extends React.Component {
    render() {
        return <div>
            <Header title="Not Found" />
            <p class="text-center">The link you requested is not found on this server. Please try a link from the menu.</p>
        </div>;
    }
}
```
### Update App.css 

Copy App.css file from Week14 folder

# Bootstrap with ReactJS 
How to use Bootstrap with ReactJS?  I used **reactstrap** library.
Please watch the video.