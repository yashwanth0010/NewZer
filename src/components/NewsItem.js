import React, { Component } from 'react';
class NewsItem extends Component {
    
    state = { 
        
     } 
    render() { 
        let {title,description,image,more} = this.props;
        return (
           <>
                <div className="card" style={{width : "18rem"}}>
                    <img src={image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h6 className="card-title"> <b>{title}</b></h6>
                        <p className="card-text">{description}</p>
                        <a href={more}  target={"_blank"} className="btn btn-primary" ><h6 className="txt">Read More...</h6></a>
                    </div>
                </div>
           </>
        );
    }
}
 
export default NewsItem;