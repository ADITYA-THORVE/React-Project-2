import React, { useState } from "react";

function Counter()
{
    const [count,SetCount]=useState(10);
    const increment=()=>{
        SetCount (count+1);
    }
    return(
        <div id ="Counter">
            <p>count:{count}</p>
            <button onClick ={increment}>Increment Counter</button><hr></hr>
        </div>
    );
}
export default Counter;
