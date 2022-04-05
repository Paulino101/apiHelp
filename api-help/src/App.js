import axios from "axios";
import { useState } from "react";

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
  // i want to extract the first name from this api request but i keep getting errors when using {array.results.name.first}
  return(
    <div>
     <button onClick={apiGet}>make api request</button>
    </div>
  );
}

export default App;
