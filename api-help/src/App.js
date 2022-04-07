import axios from "axios";
import './styles.css'
import { useState, useEffect } from "react";
import MapArray from "./components/MapArray";

function App() {
  // variables
  let modalDisplayClass = "";
  let employeesDisplayClass = "";
  const url = "https://randomuser.me/api/?results=12";
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
   // useEffect
   useEffect(() => {
    apiGet();
  }, []);
  // handler function
  const handleModalClick = () => {
    setModalClicked(!modalClicked);
    console.log(modalClicked);
  };
  // if statement
  if (modalClicked === false) {
    modalDisplayClass = "d-none";
    employeesDisplayClass = "d-flex";
  } else if (modalClicked === true) {
    modalDisplayClass = "d-flex";
    employeesDisplayClass = "d-none";
  }
  return (
    <div>
      <h1 className="text-center">Awesome Start-Up Employee Directory</h1>
      <div className="d-flex justify-content-center">
        <button onClick={apiGet} className="btn btn-primary">New Data</button>
      </div>
        
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
