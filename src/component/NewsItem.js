import React, { Component } from 'react'

export class NewsItem extends Component {
 
  render() {
   let  {title,description,imageurl,newsurl,author,date}=this.props;
    return (
      <div className='my-3'>
      <div className="card" style={{width: "18rem"}}>
      <img src={!imageurl?"https://img.etimg.com/thumb/msid-102055773,width-1070,height-580,imgsize-32406,overlay-etmarkets/photo.jpg":imageurl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <p className="card-text"> <small className="text-muted">By {!author?"unknown":author} on { new Date(date).toGMTString()}</small></p>
        
     
        <a href={newsurl} className="btn btn-dark ">Read More</a>
      </div>
    </div></div>
    )
  }
}

export default NewsItem