import { useState } from "react";

const Home = () => {
    //let surname = "Surname1";
    const [surname, setSurname] = useState("Surname1");
    const [age, setAge] = useState(26);
    const changeSurname = () => {
        setSurname("Surname2");
        setAge(27);
    }

    const handleClick = (e) => {
        console.log("hello", e);
    }
    const handleClickAgain = (name,e) => {
        console.log(name,e.target);
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{surname} is {age} years old.</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e)=>handleClickAgain('arzu',e)}>Click me Again</button>
            <button onClick={changeSurname}>Change Name</button>
        </div>
     );
}
 
export default Home;