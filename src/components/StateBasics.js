import  React,{useState} from "react";

console.log("I am outside")
let a=10; 

const StateBasics = () =>{
    let  [count,setCount] = useState(100) // count =200 => by design
    //let [a,setA] =useState(initialA); // the value of "A" is not increasing because the variable a is defined
    // outside the component's functional scope. The useState hook used to manage the count state only
    // applies to the state variable count and its corresponding updater function (setCount). It does not handle the state for the variable a.

    console.log("Component is reloading")
    console.log("Value of count is",count)

    function increaseA(){
        a=a+1
        console.log(a); //
    }

    function increaseCount(){
        setCount(count+1) //101
    }

    return(
        <div>
            <h1>A:{a}</h1>
            <button onClick={increaseA}>IncreaseA</button>
            <h1>Count:{count}</h1>
            <button onClick={increaseCount}>Increase Count</button>
        </div>
        
    )
}
export default StateBasics;