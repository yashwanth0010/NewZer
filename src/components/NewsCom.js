import React, { Component } from 'react';
import NewsItem from './NewsItem';
class NewsCOm extends Component {
        state = { 
        articles :  []
     } 

     componentDidMount() {
        fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=52d8b36cff5043f192261608a2075003")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                articles : result.articles
                
              })
            },
           
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                error
              });
            }
            
          )
      }


    render() { 
        return (
            <>
                <div className="container">
                    <div className="row my-3">
                        {this.state.articles.map((element)=>{ 
                            return(
                                <div className='col md-4 my-3'key={element.url}>
                                    <NewsItem title={element.title} description={element.description} image={element.urlToImage} more={element.url}/>
                                </div>
                            )
                        })} 
                    </div> 
                </div>
            </>
        );
    }
}
 
export default NewsCOm;