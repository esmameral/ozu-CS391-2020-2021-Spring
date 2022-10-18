import React from 'react';
export default class Sample extends React.Component {
     
    constructor(props) {
        super(props);
        this.name=" Ahmet"; 
        //bu satır eklenmezse this=undefined atanmakta ve bu da hataya sebep olmaktadır
        this.sayHello1 = this.sayHello1.bind(this); 
   
    }
    sayHello1() {
        alert('Hello  '+this.name+ ' from sayHello1');
    };
    sayHello2= () => {
        alert('Hello  '+this.name+ ' from sayHello2');
    };
    
    render() {
        return (
        <div>
            <button onClick={this.sayHello1}>Say Hello1</button>
            <button onClick={this.sayHello2}>Say Hello2</button>
            <button onClick={()=> alert('Hello  '+this.name+ ' from sayHello3')}>Say Hello3</button>
        </div>
        )
    }
}

