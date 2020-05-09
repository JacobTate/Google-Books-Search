import React, {Component} from "react";
import axios from "axios";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button"
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
        axios.post(`/api/get`, {
            bookName: this.state.bookName
        })
        .then(res => {  
            let imageArr = res.data;
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
                  <nav className="navbar navbar-light bg-light">
         <a className="navbar-brand" href="/saved">Saved books</a>
         </nav>
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

