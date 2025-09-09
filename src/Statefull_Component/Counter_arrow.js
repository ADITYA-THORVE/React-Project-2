import { useState } from "react"
import { useEffect } from "react";
const Counter_arrow=()=>
{
   // const [c1,setCounter]=useState(0)
     var _useState=useState(0);
     const c1=_useState[0];
     const setCounter=_useState[1];
     const[count,setCount]=useState(0);
    useEffect(()=>
    {
        document.title=`you clicked ${c1} times `;
    })
useEffect(()=>{
    console.log("useeffect called\n");
    setCount(()=>c1*2)
},[c1]);
return (<div>
    <h3>React demo with useState and useEffect hook </h3>
    <h2>{count}</h2>
    <button onClick={()=>setCounter(c1+1)}>Click {c1}</button>
    </div>
)
}
export default Counter_arrow;

