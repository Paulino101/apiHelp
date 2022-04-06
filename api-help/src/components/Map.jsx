import React from "react";

function Map({ name, picture, email, location }) {
    // what if email is too long for container?
    let emailLength = email.length;
    let emailFontSize = '';
    // if
    if(emailLength >= 29){
        emailFontSize = '.75rem'
    } else if (emailLength <= 28){
        emailFontSize = '1rem'
    }
    

  return(
      <div className="d-flex  p-2 m-1 justify-content-between align-items-center border border-secondary">
          <img src={picture.large} className=' rounded-circle' style={{width:'25%', height:'25%'}} alt={name.first} />
          <div className="textContainer text-end mw-75">
            <h2 className="w-100">{name.first} {name.last}</h2>
            <div className="emailAndLocationContainer d-flex flex-column">
                <p className="text-secondary m-0" style={{fontSize:`${emailFontSize}`}}>{email}</p>
                <p className="text-secondary">{location.city}</p>
            </div>
          </div>
      </div>
  );
}

export default Map;
