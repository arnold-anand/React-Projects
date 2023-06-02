import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, date, url, imageURL} = this.props;
    return (
        <div className='m-8'>
            <div className='w-80 border border-gray-200 border-opacity-60  rounded-xl'>
            <img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg" src={imageURL} alt="blog"/>
            <div className="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{date}</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
            <p class="leading-relaxed mb-3">{description}</p>
            <div class="flex items-center flex-wrap ">
              <a href={url} class="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">Read More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            </div>
            </div>
        </div>
    )
  }
}
