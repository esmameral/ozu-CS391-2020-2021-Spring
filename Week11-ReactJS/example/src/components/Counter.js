import { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    
    
      
    increaseCount = () => {
        const { count } = this.state; // ES6 Destructuring Assignment
        this.setState({ count: count + 1 });
    }
    decreaseCount = () => {
        const { count } = this.state; // ES6 Destructuring Assignment
        this.setState({ count: count - 1 });
    }
    render() {
        const { count } = this.state; // ES6 Destructuring Assignment.
        return (
            <div>
                <p>{count}</p>
                <button type='button' onClick={this.increaseCount}>
                    Click to increment 
                </button>
                <button type='button' onClick={this.decreaseCount}>
                    Click to decrement
                </button>
            </div>
        )
    }
}

export default Counter;
