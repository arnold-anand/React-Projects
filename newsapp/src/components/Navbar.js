import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
        <header class="text-white bg-blue-900 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a href="/" class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <span class="ml-3 text-xl">NewsMonkey</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a href="/" className="mr-5 hover:text-gray-300">Home</a>
      <a href="/about" className="mr-5 hover:text-gray-300">About</a>
      <ul className="flex space-x-3">
      <li><a className="hover:text-gray-300" href="/">Business</a></li>
      <li><a className="hover:text-gray-300" href="/">Entertainment</a></li>
      <li><a className="hover:text-gray-300" href="/">General</a></li>
      <li><a className="hover:text-gray-300" href="/">Health</a></li>
      <li><a className="hover:text-gray-300" href="/">Science</a></li>
      <li><a className="hover:text-gray-300" href="/">Sports</a></li>
      <li><a className="hover:text-gray-300" href="/">Technology</a></li>
      </ul>

    </nav>

  </div>
</header>
    );
  }
}