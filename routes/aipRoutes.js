const Saved = require("../models").Saved;
module.exports = function(app){
    app.post("/api/book/save", (req, res) => {
        const item = req.body;
        // console.log(item.title);
        // console.log(item.authors[0]);
        // console.log(item.bookLink);
        // console.log(item.description);
        // console.log(item.imageLink);
        Saved.create({
            title: item.title,
            author: item.authors[0],
            bookLink: item.bookLink,
            description: item.description,
            imageLink: item.imageLink
        }).then(res => {
            
        }).catch(err => {
            console.log(err);
        })
      })
}