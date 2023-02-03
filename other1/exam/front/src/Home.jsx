import {React , useState} from 'react'
import axios from "axios"

export const Home = () => {
    const [name, setName] = useState("");
  
    const create = async () => {
      await axios
        .post("http://localhost:8000/", {name : name})
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
          console.log(error); 
        });
      };
      return(
        <div>
        <input type="text" value={name}
        onChange={(e)=>{setName(e.target.value)}}/>
        <button onClick={create}>submit</button>
        <p></p>
        </div>
      )
}

export default Home