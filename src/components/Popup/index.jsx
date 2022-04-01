import React from "react";
import "./styles.css";

const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        {props.content}
        <span className="close-icon" onClick={props.handleClose}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
<path d="M7.71875 6.28125L6.28125 7.71875L23.5625 25L6.28125 42.2812L7.71875 43.7188L25 26.4375L42.2812 43.7188L43.7188 42.2812L26.4375 25L43.7188 7.71875L42.2812 6.28125L25 23.5625L7.71875 6.28125Z" fill="white"/>
</svg></span>
      </div>
    </div>
  );
};

export default Popup;