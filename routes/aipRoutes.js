const Saved = require("../models").Saved;
module.exports = function(app){
    app.post("/api/book/save", (req, res) => {
        const item = req.body;
        Saved.create({
            title: item.title,
            author: item.authors[0],
            bookLink: item.bookLink,
            description: item.description,
            imageLink: item.imageLink
        }).then(res => {
            
        }).catch(err => {
            console.log(err);
        });
      });
      app.get("/api/books/saved", (req, res) => {
          Saved.find({}).then(data => {
           res.json(data);
          });
      });
      app.post("/api/saved/delete", (req, res) => {
          Saved.deleteOne({_id: req.body.cardId})
          .then(data => {
          })
          .catch(err => {
              console.log(err);
          });
     });
};