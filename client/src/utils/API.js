import axios from "axios";
export default {
    getBooks: function() {
        axios.post({
            method: "POST",
            url: "/api/books",
            data: "test"
          }).then(function(res){
            console.log(res);
          }).catch(err => {console.log(err);
          })
    }
};