import React, {Component} from "react";
//import axios from "axios";
import Card from "./Card";
import Button from "./Button"
class HomePage extends Component {
    constructor () {
        super()
        this.state = {
            isRendered: false,
            imgArr: ["https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg", "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"]
        }
    }
    //  bookSearch(bookName){
    //     axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookName}&key=AIzaSyBsqVqaORZbJ82yW1hFcUcMHUB-ZEGexo8`)
    //     .then(function (res) {
    //         console.log(res.data.items);
    //         return(
    //         <Card 
    //         imageLink={res.data.items[0].volumeInfo.thumbnail}
    //         />
    //         )
    //     });
    // }
    isRendered () {
       
      
      this.state.isRendered ? this.setState({isRendered: false}): this.setState({isRendered: true});
      return this.state.isRendered
    }
    renderCard () {
        return(
            <div>
                {
      this.state.imgArr.map(item => (
              <Card 
              imageLink={item}
              />     
    ))
    }
    </div>
        )
    }
    render() {
        return(
            <div>
            <Button 
            renderCard={this.isRendered.bind(this)}
            />
            {this.state.isRendered ? this.renderCard(): null}
            </div>
        )
    }
};
export default HomePage;

