import axios from "axios";
import { useState } from "react";
import MapArray from "./components/MapArray";

function App() {
  const url = "https://randomuser.me/api/?results=10";
  const [array, setArray] = useState([]);
// api request
  const apiGet = () => {
    axios.get(url).then((res) => {
      setArray(res.data.results);
      console.log(array);
    });
  };
  // i want to extract the first name from this api request and pass it as a prop,  but i keep getting errors
  return(
    <div>
     <button className="btn btn-secondary btn-outline-danger" onClick={apiGet}>API Request</button>
     <h1 className="text-center">Awesome Start-Up Employee Directory</h1>
     <MapArray userData={array}/>
    </div>
  );
}

export default App;
