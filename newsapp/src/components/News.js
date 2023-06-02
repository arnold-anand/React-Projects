import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
        <>
        <center>
            <h1 className='text-3xl'>NewsMonkey - Top Headlines</h1>
        </center>
      <div className='flex flex-wrap items-center justify-center'>
        <NewsItem></NewsItem>
      </div>
        </>
    )
  }
}
