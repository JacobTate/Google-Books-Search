import React, {Component} from "react";
import axios from "axios";
import Card from "./Card";
import Button from "./Button"
class HomePage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            isRendered: false,
            isLoaded: false,
            bookName: "",
            imgArr: [],
            bookTitle: "",
            author: "",
            desc: "", 
        }
    }
    handleInputChange = event => {
        let value = event.target.value;
        this.setState({
          bookName: value
        }); 
      };
    apiCall () {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.bookName}&key=AIzaSyBsqVqaORZbJ82yW1hFcUcMHUB-ZEGexo8`)
        .then(res => {  
            let imageArr = res.data.items;
            console.log(imageArr);
            this.setState({
                 imgArr: imageArr
            })
            this.state.isRendered ? this.setState({isRendered: false}): this.setState({isRendered: true});
            return this.state.isRendered;
 })
 .catch(err => console.log(err));
     
    }
    renderCard (imageArr) {
        return(
            <div>
                {
      imageArr.map(item => (
           <Card 
           imageLink={item.volumeInfo.imageLinks.thumbnail}
           description={item.volumeInfo.description}
           authors={item.volumeInfo.authors}
           title={item.volumeInfo.title}
           bookLink={item.volumeInfo.canonicalVolumeLink}
           />
    ))
    }
    </div>
        )

    }
    render() {
        return(
            <div>
          <div className="input-group m-3">
  <div className="input-group-prepend">
  <Button 
            apiCall={this.apiCall.bind(this)}
            />
  </div>
  <input
   type="text"
    className="form-control"
     placeholder="Search"
      aria-label="Example text with button addon"
       aria-describedby="button-addon1"
       value={this.state.bookName}
       name="searchBook"
       onChange={this.handleInputChange}
        />
</div>
            {this.state.isRendered ? this.renderCard(this.state.imgArr): null}
    </div>
        )
    }
};
export default HomePage;

