import React,{useState} from "react";

import { FaPlus,FaMinus, FaScribd } from "react-icons/fa";//given on oficial react icon

const CounterApp = () =>{
    let [a,setA] = useState(0);

     // function increase(){
    //      setA(a+1)
    // }


    return(
        <div>
               <h1>Count:{a} </h1>
               <button onClick={()=>setA(a+1)}>  <FaPlus/> </button>
               <button onClick={()=>setA(a-1)}>  <FaMinus/> </button>
               <button onClick={() => setA(0)}> <FaScribd/> </button>
        </div>
    )
}

export default CounterApp;
