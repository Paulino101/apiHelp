import axios from "axios";
import { useState } from "react";
import MapArray from "./components/MapArray";

function App() {
  // variables
  let modalDisplayClass = "";
  let employeesDisplayClass = "";
  const url = "https://randomuser.me/api/?results=10";
  // state
  const [array, setArray] = useState([]);
  const [modalClicked, setModalClicked] = useState(false);
  // api request
  const apiGet = () => {
    axios.get(url).then((res) => {
      setArray(res.data.results);
      console.log(array);
    });
  };
  // handler function
  const handleModalClick = () => {
    setModalClicked(!modalClicked);
    console.log(modalClicked);
  };
  // wrapper function
  // if statement
  if (modalClicked === false) {
    modalDisplayClass = "d-none";
    employeesDisplayClass = "d-flex";
  } else if (modalClicked === true) {
    modalDisplayClass = "d-flex";
    employeesDisplayClass = "d-none";
  }
  // i want to extract the first name from this api request and pass it as a prop,  but i keep getting errors
  return (
    <div>
      <button onClick={apiGet} className="btn btn-primary">
        API Request
      </button>
      <h1 className="text-center">Awesome Start-Up Employee Directory</h1>
      <MapArray
        handleModalClick={handleModalClick}
        modalDisplayClass={modalDisplayClass}
        employeesDisplayClass={employeesDisplayClass}
        userData={array}
      />
    </div>
  );
}

export default App;
