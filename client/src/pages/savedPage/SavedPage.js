import React, {Component} from "react";
import SavedCard from "../../components/savedCard/SavedCard";
import axios from "axios";
class Savedpage extends Component {
    constructor(props){
        super(props)
        this.state = { 
         isLoaded: false,
         items: []
        }
    }
    componentDidMount () {
        axios.get("/api/books/saved").then(res => {   
                this.setState({
                    isLoaded: true,
                    items: res.data
                })
                });
            }
    renderSaved = () => { 
       
         
        return(
            <div>
       <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="/">Home</a>
</nav>
                {
      this.state.items.map(element => (
           <SavedCard
           imageLink={element.imageLink}
                description={element.description}
                authors={element.author}
                title={element.title}
                bookLink={element.bookLink}
                cardId={element._id}
                key={element._id}
           />
    ))
    }
    </div>
        )

    }
render () {
    return(
    <div>{this.state.isLoaded ? this.renderSaved(): null}</div>
     
    );
}
};
export default Savedpage;