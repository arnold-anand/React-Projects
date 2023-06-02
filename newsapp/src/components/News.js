import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=45d0219335c54033a1a0442f41028c75&page=1&pageSize=12";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }
  handlePrevClick = async () => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=45d0219335c54033a1a0442f41028c75&page=${
      this.state.page - 1
    }&pageSize=12`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  handleNextClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 12))) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=45d0219335c54033a1a0442f41028c75&page=${
        this.state.page + 1
      }&pageSize=12`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };
  render() {
    return (
      <>
        <center>
          <h1 className="text-3xl my-10">NewsMonkey - Top Headlines</h1>
        </center>
        <center>{this.state.loading && <Spinner />}</center>
        <div className="flex flex-wrap items-center justify-center">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <NewsItem
                key={element.url}
                title={element.title ? element.title.slice(0, 50) : ""}
                imageURL={
                  element.urlToImage
                    ? element.urlToImage
                    : "https://thumbs.dreamstime.com/b/no-image-icon-vector-available-picture-symbol-isolated-white-background-suitable-user-interface-element-205805243.jpg"
                }
                description={
                  element.description
                    ? element.description.slice(0, 45)
                    : "Click below to read more"
                }
                date={element.publishedAt}
                url={element.url}
              ></NewsItem>
            );
          })}
        </div>
        <div className="m-28 flex justify-between">
          <button
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
            className="p-2 rounded-md bg-blue-900 text-white w-20"
          >
            Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 12)
            }
            onClick={this.handleNextClick}
            className="p-2 rounded-md bg-blue-900 text-white w-20 disabled:bg-gray-400"
          >
            Next
          </button>
        </div>
      </>
    );
  }
}
