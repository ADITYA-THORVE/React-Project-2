import React from "react";

function Greeting(props)
{
    return(
        <div>
            <h1>Welcome{props.username}</h1>
            <h3>I am {props.profession}</h3>
            <h3>Good Morning</h3>
        </div>
    );
}
export default Greeting;