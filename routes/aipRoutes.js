// express = require('express'),
//     router = express.Router();
//     router.route("/api/book/save").post((req, res, next) => {
//         console.log(req);
        
//     })
module.exports = function(app){
    app.post("/api/book/save", (req, res) => {
        console.log(req.body.bookData);
      })
}