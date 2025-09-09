import React,{Component} from "react";

class Hello_class extends Component{
    render (){
        return <div id="Hello_class">
            <h1>Hello,{this.props.name}</h1>
            <h1>This is class Component</h1>
        </div>
    }
}
export default Hello_class;