import React, { Component } from "react";
import {Link} from 'react-router-dom';
export default class Navbar extends Component {
  render() {
    return (
        <header class="text-white bg-blue-900 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to="/" class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <span class="ml-3 text-xl">NewsMonkey</span>
    </Link>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to="/" className="mr-5 hover:text-gray-300">Home</Link>
      <Link to="/" className="mr-5 hover:text-gray-300">About</Link>
      <ul className="flex space-x-3">
      <li><Link className="hover:text-gray-300" to="/business">Business</Link></li>
      <li><Link className="hover:text-gray-300" to="/entertainment">Entertainment</Link></li>
      <li><Link className="hover:text-gray-300" to="/general">General</Link></li>
      <li><Link className="hover:text-gray-300" to="/health">Health</Link></li>
      <li><Link className="hover:text-gray-300" to="/science">Science</Link></li>
      <li><Link className="hover:text-gray-300" to="/sports">Sports</Link></li>
      <li><Link className="hover:text-gray-300" to="/technology">Technology</Link></li>
      </ul>

    </nav>

  </div>
</header>
    );
  }
}