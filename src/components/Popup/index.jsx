import React from "react";
import "./styles.css";

const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        {props.content}
        <span className="close-icon" onClick={props.handleClose}><svg id="icon-x" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
<path d="M3.85938 3.14062L3.14062 3.85938L11.7812 12.5L3.14062 21.1406L3.85938 21.8594L12.5 13.2188L21.1406 21.8594L21.8594 21.1406L13.2188 12.5L21.8594 3.85938L21.1406 3.14062L12.5 11.7812L3.85938 3.14062Z" fill="white"/>
</svg></span>
      </div>
    </div>
  );
};

export default Popup;