import { useState } from "react"
import Button from "../Button";

const Demo = () => {
    const [name, setName] = useState ("Wang Yi");

    const handleChangeName = () => {
        setName("Zhou Shi Yu"); 
        if (name === 'Zhou Shi Yu')
        {
            setName("Wang Yi");
        }
        else
        {
            setName("Zhou Shi Yu");
        }
    }

    const [count, setCount] = useState (0);

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1);
    }

    return(
        <div>
            <h2>Name: {name} </h2>
            {/*<button onClick = {handleChangeName}> Change Name </button>*/}
            <Button onClick = {handleChangeName}> Change Name </Button>

            <h2>Count: {count}</h2>
            <Button onClick= {increase}> Increase </Button>
            <Button onClick= {decrease}> Decrease </Button>
        </div>
    )
}
export default Demo;