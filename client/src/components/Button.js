import React from "react";
function Button (props) {
return <button onClick={() => {props.isRendered()}}>click here</button>;
}
export default Button;