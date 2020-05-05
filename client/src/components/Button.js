import React from "react";
import axios from "axios";
import API from "../utils/API"
function Button () {
 //   const axios = require("axios");
function testGet(){

}
return <button onClick={() => {API.getBooks()}}>click here</button>
}
export default Button;