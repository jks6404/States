import React,{useState} from "react";

const StateWithArray =()=> {
    let [favourite, setFavourite] = useState(["apple","mango","banana"])
    let [fruit, setFruit] =useState("")

    console.log("Favourite= ",favourite)
    console.log("Fruit=",fruit)

    function addToFavourite(){
        setFavourite([...favourite,fruit])
        setFruit("")
    }
    return (
        <div>
            <input type ="text" placeholder="Enter favourite Fruits"
            onChange={(event) =>setFruit(event.target.value)}
            value={fruit}
            />

            <button onClick={addToFavourite}>Add to Favourite</button>


            <h1>{favourite.join(",")} </h1>
        </div>
    )
}

export default StateWithArray;