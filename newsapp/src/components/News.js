import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    constructor(){
        super();
        this.state = {
            articles : []

        }
    }
    async componentDidMount(){
        console.log("im working")
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=45d0219335c54033a1a0442f41028c75";
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({articles: parsedData.articles})
    }
  render() {
    return (
        <>
        <center>
            <h1 className='text-3xl'>NewsMonkey - Top Headlines</h1>
        </center>
        <div className='flex flex-wrap items-center justify-center'>
      {this.state.articles.map((element)=>{
        return <NewsItem key={element.url} title={element.title?element.title.slice(0,50):""} imageURL={element.urlToImage ? element.urlToImage : "https://thumbs.dreamstime.com/b/no-image-icon-vector-available-picture-symbol-isolated-white-background-suitable-user-interface-element-205805243.jpg"} description={element.description?element.description.slice(0,45): "Click below to read more"} date={element.publishedAt} url={element.url}></NewsItem>
        })}
        </div>
        </>
    )
  }
}
