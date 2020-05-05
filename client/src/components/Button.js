import React from "react";
import axios from "axios";
import Card from "./Card"
import API from "../utils/API"
function Button (props) {
 //   const axios = require("axios");
function bookSearch(bookName){
    // axios.get("/api/testget").then(res => {})
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookName}&key=AIzaSyBsqVqaORZbJ82yW1hFcUcMHUB-ZEGexo8`)
    .then(function (res) {
        console.log(res.data.items);
        
        //  axios.post("/api/book/save", {
        //      bookData: res.data.items
        //  }).then(res => {
        //      console.log(res); 
        //  }).catch(err => {
        //      console.log(err);
        //  });
    });
 
}
// function renderCard () {
//     return (
//     <Card 
//         imageLink={"https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg"}
//     />
//     )
// }

return <button onClick={() => {props.renderCard()}}>click here</button>;
}
export default Button;