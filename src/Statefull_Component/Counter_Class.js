import React, { Component } from "react";

class Counter_class extends Component
{
    constructor()
    {
        super();
         this.state={c1:300}
    }
    setCount=()=>
    {
        this.setState({
            c1:this.state.c1+1
        })
    }
    render()
    {
        return <div>
            <h1> Count is{this.state.c1} </h1>
            <button onClick={this.setCount}>click</button>
        </div>
    }
}
export default Counter_class;

