import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenuVisible: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState((prevState) => ({
      mobileMenuVisible: !prevState.mobileMenuVisible
    }));
  }

  render() {
    const { mobileMenuVisible } = this.state;

    return (
      <>
        <header className="text-white bg-blue-900 body-font">
          <div className="flex justify-between items-center p-2">
            <div className="text-2xl p-2">NewsMonkey</div>
            <button className="md:hidden" id="hamburger" onClick={this.toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </button>
            <ul className="hidden md:flex space-x-2">
              <NavItem to="/" label="Home" />
              <NavItem to="/" label="About" />
              <NavItem to="/business" label="Business" />
              <NavItem to="/entertainment" label="Entertainment" />
              <NavItem to="/general" label="General" />
              <NavItem to="/health" label="Health" />
              <NavItem to="/science" label="Science" />
              <NavItem to="/sports" label="Sports" />
              <NavItem to="/technology" label="Technology" />
            </ul>
          </div>
        </header>
        <div id="mobile-menu" className={mobileMenuVisible ? "block md:hidden" : "hidden"}>
          <nav className="p-2">
            <ul className="flex-col space-y-3">
              <NavItem to="/" label="Home" />
              <NavItem to="/" label="About" />
              <NavItem to="/business" label="Business" />
              <NavItem to="/entertainment" label="Entertainment" />
              <NavItem to="/general" label="General" />
              <NavItem to="/health" label="Health" />
              <NavItem to="/science" label="Science" />
              <NavItem to="/sports" label="Sports" />
              <NavItem to="/technology" label="Technology" />
              <NavItem to="/technology" label="Technology" />
            </ul>
          </nav>
        </div>
      </>
    );
  }
}

const NavItem = ({ to, label }) => (
  <li>
    <Link to={to} className="hover:text-blue-500">
      {label}
    </Link>
  </li>
);

export default Navbar;
