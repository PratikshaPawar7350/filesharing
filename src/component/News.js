import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country: 'In',
    pageSize: 5,
    category: 'general',
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    console.log('hello');
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updatenews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=af4f724b044f44cdabc2f34fda0e4b5c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({ articles: parsedata.articles, totalResults: parsedata.totalResults });
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=af4f724b044f44cdabc2f34fda0e4b5c&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({ articles: parsedata.articles, totalResults: parsedata.totalResults });
  }

  handleprevclick = async () => {
     /* console.log("previous");
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=af4f724b044f44cdabc2f34fda0e4b5c&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  let data=await fetch(url);
  let parsedata= await data.json()
  console.log(parsedata);
  
    this.setState({
      page:this.state.page-1,
   
      articles:parsedata.articles })*/
    this.setState({ page: this.state.page - 1 });
    this.updatenews();
  };

  handlenextclick = async () => {
     /*console.log("next");
  if( this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))
  {

  }
  else{
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=af4f724b044f44cdabc2f34fda0e4b5c&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
let data=await fetch(url);
let parsedata= await data.json()
console.log(parsedata);


  this.setState({
    page:this.state.page+1,
 
    articles:parsedata.articles })
    */
    this.setState({ page: this.state.page + 1 });
    this.updatenews();
  };

  render() {
    return (
      <div className='container my-3'>
        <h3>NewsMonkey-Top Headlines</h3>
        {this.state.loading && <Spinner />}
        <div className='row'>
          {this.state.articles.map((element) => {
            return (
              <div className='col-md-4' key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ''}
                  description={element.description ? element.description.slice(0, 88) : ''}
                  imageurl={element.urlToImage}
                  newsurl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
        <div className='container d-flex justify-content-between'>
          <button
            disabled={this.state.page <= 1}
            type='button'
            className='btn btn-dark'
            onClick={this.handleprevclick}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            type='button'
            className='btn btn-dark'
            onClick={this.handlenextclick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
