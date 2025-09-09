import React,{Component} from "react";


class ContactCard extends Component{

    render(){
         return <div id="ContactCard">
            <h1>*CONTACT CARD*   {this.props.Contact}</h1>
            <h1>This is my Contact Card.</h1>
            <h2>Front End Developer..</h2>
            <h3>Name:-Aditya Jayaram Thorve</h3>
            <h3>Mob:-no 9322790131</h3>
            <h3>Dob:-05/08/2003</h3>
            <h3>Education:-Bachelour Of Computer Application</h3>
            <h3>Address:- Pune Sangavi </h3>
            <h3>Email:-thorveaditya111@gmail.com</h3>
            <h3>Linkedin.com/in/aditya-thorve-157618373</h3>
            <h3></h3>

        </div>
    }
}
export default ContactCard;