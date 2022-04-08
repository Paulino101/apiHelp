import axios from "axios";
import "./styles.css";
import React, { useState, useEffect } from "react";
import MapArray from "./components/MapArray";
import Modal from "./components/Modal";
import ThemeSwith from "./components/ThemeSwith";

function App() {
  // variables
  let modalDisplayClass = "";
  let modalContentTheme = "";
  let modalTextTheme = "";
  let modalCloseBackground = "";
  let employeesDisplayClass = "";
  let switchText = "";
  let pageTheme = "";
  const url = "https://randomuser.me/api/?results=24";
  // state
  const [array, setArray] = useState([]);
  const [modalClicked, setModalClicked] = useState(false);
  const [theme, setTheme] = useState(true);
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
  // handler functions
  const handleModalClick = () => {
    setModalClicked(!modalClicked);
    console.log(modalClicked);
  };

  const handleSwitchThemeClick = () => {
    setTheme(!theme);
    console.log("switch theme was clicked");
    console.log(theme);
  };
  // if statement
  if (modalClicked === false) {
    modalDisplayClass = "d-none";
    employeesDisplayClass = "d-flex";
  } else if (modalClicked === true) {
    modalDisplayClass = "d-flex";
    employeesDisplayClass = "d-none";
  }
  // true here means dark mode
  if (theme === true) {
    pageTheme = "bg-dark text-white";
    switchText = "swith to light mode";
    modalContentTheme = "bg-dark";
    modalTextTheme = "text-white";
    modalCloseBackground = "bg-white";
  } else if (theme === false) {
    pageTheme = "bg-white";
    switchText = "switch to dark mode";
    modalContentTheme = "bg-white";
    modalTextTheme = "text-dark";
  }
  //
  return (
    <div className={`${pageTheme}`}>
      <h1 className="text-center pt-2">Employee Directory</h1>
      <Modal
        modalContentTheme={modalContentTheme}
        modalTextTheme={modalTextTheme}
        modalCloseBackground={modalCloseBackground}
      />
      <ThemeSwith
        switchText={switchText}
        onClickHandler={handleSwitchThemeClick}
      />

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
