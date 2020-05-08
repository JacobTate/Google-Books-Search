import React from "react";
import axios from "axios";
function SavedCard({title, authors, bookLink, description, imageLink, cardId}) {
        function deleteSaved (cardId) {
            axios.post("/api/saved/delete", {
                cardId
            }).then(res => {
            });
            window.location.reload(false);
        }   
return(
    <div id="cardHolder">
    <div id="cardHeader">
<div>{authors}</div>
<div>{title}</div>
     <div id="buttons">
      <span><a className="btn btn-primary" href={bookLink}>See book</a></span>
      <span><button  className="btn btn-primary" onClick={() => {deleteSaved(cardId)}}>Delete</button></span>
    </div>
  </div>
<div>
    <img id="cardImage" src={imageLink}>
        </img>
</div>
<div id="cardDesc">
    {description}
</div>
</div>
    );
};
export default SavedCard;