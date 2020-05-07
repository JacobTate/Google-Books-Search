const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/googleBooksHW", { useNewUrlParser: true });
const Schema = mongoose.Schema;
const SavedSchema = new Schema({
title: {
    type: String,
    required: true
},
author: {
    type: String,
    required: true
},
bookLink: {
    type: String,
    required: true
},
description: {
    type: String,
    required: true
},
imageLink: {
    type: String,
    required: true
}
});
const Saved = mongoose.model("Saved", SavedSchema);
module.exports = Saved;