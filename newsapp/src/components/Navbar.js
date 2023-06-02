import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
        <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">NewsMonkey</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a href="/" className="mr-5 hover:text-gray-900">Home</a>
            <a href="/about" className="mr-5 hover:text-gray-900">About</a>
          </nav>
          
        </div>
      </header>
    );
  }
}
