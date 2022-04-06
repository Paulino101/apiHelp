import axios from "axios";
import { useState } from "react";
import MapArray from "./components/MapArray";

function App() {
  const url = "https://randomuser.me/api/?results=3";
  const [array, setArray] = useState([]);
// api request
  const apiGet = () => {
    axios.get(url).then((res) => {
      setArray(res.data);
      console.log(array);
    });
  };
  // i want to extract the first name from this api request and pass it as a prop,  but i keep getting errors
  return(
    <div>
     <button onClick={apiGet}>make api request</button>
     {array.map(arr => {(
      <MapArray name={array.results.name.first}/>
     )})}
    </div>
  );
}

export default App;
