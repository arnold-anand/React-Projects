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
      <a href="/" class="mr-5 hover:text-gray-900">Home</a>
      <a href="/about" class="mr-5 hover:text-gray-900">About</a>
    </nav>

  </div>
</header>
    );
  }
}
