import React, {Component} from "react";
import axios from "axios";
import Card from "./Card";
import Button from "./Button"
import Input from "./Input"
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
        console.log(this.state.bookName);
        
      };
    isRendered () {
      this.state.isRendered ? this.setState({isRendered: false}): this.setState({isRendered: true});
      return this.state.isRendered;
    }
    renderCard (imageArr) {
        
        if (imageArr.length === 0) {
            return console.log(`404 no results found`);
        }
        else{
            console.log(this.state);
        return(
            <div>
                {
      imageArr.map(item => (
           <Card 
           imageLink={item.volumeInfo.imageLinks.thumbnail}
           />
    ))
    }
    </div>
        )
}
    }


    componentDidMount () {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.bookName}&key=AIzaSyBsqVqaORZbJ82yW1hFcUcMHUB-ZEGexo8`)
       .then(res => {  
           let imageArr = res.data.items;
           this.setState({
                imgArr: imageArr
           })
                
})
.catch(err => console.log(err)); 
}
    render() {
        return(
            <div>
            <Button 
            isRendered={this.isRendered.bind(this)}
            />
            {this.state.isRendered ? this.renderCard(this.state.imgArr): null}
            <form className="form">
       <input
            value={this.state.bookName}
            name="searchBook"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Search"
          />
  </form>
                        </div>
        )
    }
};
export default HomePage;

