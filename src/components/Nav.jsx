import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(e) {
    e.preventDefault();
    const location = this.search.value;
    const encodedLocation = encodeURIComponent(location);
    if (location.length > 0) {
      this.search.value = '';
      window.location.hash = `#/?location=${encodedLocation}`;
    }
  }

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink
                to="/"
                activeClassName="active"
                activeStyle={{ fontWeight: 'bold' }}
              >Get Weather</IndexLink>
            </li>
            <li>
              <Link
                to="/about"
                activeClassName="active"
                activeStyle={{ fontWeight: 'bold' }}
              >About</Link>
            </li>
            <li>
              <Link
                to="/examples"
                activeClassName="active"
                activeStyle={{ fontWeight: 'bold' }}
              >Examples</Link>
            </li>
          </ul>
        </div>{/* top-bar-left */}
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input
                  type="search"
                  placeholder="Enter city name"
                  ref={(c) => { this.search = c; }}
                />
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather" />
              </li>
            </ul>
          </form>
        </div>{/* top-bar-right */}
      </div>
    );
  }
}

export default Nav;
