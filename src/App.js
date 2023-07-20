import React from "react";
import StateBasics  from "./components/StateBasics";
import CounterApp from "./components/counterApp";
import StateWithObject from "./components/StatesWithObject";
import SimpleForm from "./components/SimpleForm";
import StateWithArray from "./components/StateWithArray";
import SumOf2 from "./components/SumOf2";
import FromValidation from "./components/FormValidation";
import "./style.css";



const App = () => {

    return(
        <div>
            <StateBasics/>
            <CounterApp/>
            <StateWithObject/>
            <SimpleForm/>
            <StateWithArray/>
            <SumOf2/>
            <FromValidation/>
        </div>
    )
}

export default App;