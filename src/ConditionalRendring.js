import React from "react";
function ConditionalRendring({isloggedin})
{
    return(
        <div id="conditional">
            {isloggedin ?<h1>Welcome to ITVEDANT</h1>:<h1>Bye Bye</h1>};
        </div> 
    )
    }; 

export default ConditionalRendring;






// if (isloggedin)
//     {
//         return (<h1>WELCOME TO ITVEANT</h1>);
//     }
//     else{
//         return(<h1>Please Log In</h1>);
//     }