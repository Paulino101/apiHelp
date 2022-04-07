import React from "react";
import Map from "./Map";
// this component just maps throught the data and passes props to <Map /> component

function MapArray({
  userData,
  modalDisplayClass,
  employeesDisplayClass,
  handleModalClick,
}) {
  return (
    <div className="d-md-flex flex-md-row flex-md-wrap align-items-md-center ">
      {userData.map((user) => {
        return (
          <React.Fragment>
            <Map
              modalDisplayClass={modalDisplayClass}
              employeesDisplayClass={employeesDisplayClass}
              handleModalClick={handleModalClick}
              key={user.cell}
              name={user.name}
              picture={user.picture}
              email={user.email}
              location={user.location}
              phone={user.cell}
              birthday={user.dob}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default MapArray;
