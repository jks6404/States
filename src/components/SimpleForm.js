
import React,{useState}  from "react";

const SimpleForm =() =>{
    let [name,setName] = useState(""); //"A"
    console.log("name from usestate" , name) //"A"

    function manageName(event) {
        console.log("ur typed input", event.target.value)
        setName(event.target.value.toUpperCase()) //a
    }

    return(
        <div style={{color: "red"},{margin:"10px"}}>
            <input type="text" placeholder="Enter Your Name"
            onChange={manageName}
            value={name} />

            <button onClick={() =>setName("")}>Clear</button>
            <h1>{name}</h1>
        </div>
    )
}

export default SimpleForm;