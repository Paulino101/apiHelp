import React from "react";
import Map from "./Map";


function MapArray({ userData }) {
  return (
  <div>
    {userData.map((user) => { return (
      <Map key={user.cell} name={user.name} picture={user.picture} email={user.email} location={user.location} phone={user.phone} birthday={user.dob}/>
      )})}
  </div>
  );
}

export default MapArray;
