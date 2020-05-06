import React from "react";
function Button (props) {
return <button onClick={() => {props.apiCall()}}>click here</button>;
}
export default Button;