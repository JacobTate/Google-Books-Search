import React from "react";
function Card({title, authors, bookLink, description, imageLink}) {
return(
<div id="cardHolder">
<div id="cardImage">
    <img src={imageLink}>
    </img>
</div>
</div>
    )
};
export default Card;