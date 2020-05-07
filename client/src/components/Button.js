import React from "react";
function Button (props) {
return <button className="btn btn-outline-secondary" id="button-addon1" type="button" onClick={() => {props.apiCall()}}>click here</button>;
}
export default Button;