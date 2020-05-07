import React, {Component} from "react";
import SavedCard from "../../components/savedCard/SavedCard"
import axios from "axios";
class Savedpage extends Component {
    constructor(props){
        super(props)
        this.state = { 
         isRendered: false
        }
    }
    componentDidMount () {
        this.setState({
            isRendered: true
        })
    }
    renderSaved = () => {
        console.log(this.state.isRendered);
        
        axios.get("/api/books/saved").then(res => {
        //     return(
        //         <div>
        //             {
        //  res.data.map(element => (
        //      <SavedCard
        //      imageLink={element.imageLink}
        //      description={element.description}
        //      authors={element.author}
        //      title={element.title}
        //      bookLink={element.bookLink}
        //      cardId={element._id}
        //      key={element._id}
        //      />
             
        //  ))
        // }
        //  </div>
        //     )    
        return(
            <div>
                {
      res.data.map(element => (
          console.log(element.title),
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
        });
    }
render () {
    return(
    <div>{this.state.isRendered ? this.renderSaved(): null}</div>
     
    );
}
};
export default Savedpage;