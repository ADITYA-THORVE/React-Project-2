import React, { useState } from "react";

const CounterNew=()=>
{
    const [c1, SetCount] =useState(50)

    return <div>
        <h1>Count is {c1}</h1>
        <button onClick={()=>{SetCount(c1+1);}}>Click Here</button>
    </div>
}
export default CounterNew;
