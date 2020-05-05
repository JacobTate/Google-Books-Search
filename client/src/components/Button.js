import React from "react";
import axios from "axios";
import API from "../utils/API"
function Button () {
 //   const axios = require("axios");
function testGet(bookName){
    // axios.get("/api/testget").then(res => {})
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookName}&key=AIzaSyBsqVqaORZbJ82yW1hFcUcMHUB-ZEGexo8`)
    .then(function (res) {
         axios.post("/api/book/save", {
             bookData: res.data.items
         }).then(res => {
             console.log(res); 
         }).catch(err => {
             console.log(err);
         })
    })
  
}
return <button onClick={() => {testGet("javascript")}}>click here</button>
}
export default Button;