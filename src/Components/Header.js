import React from "react";
import { NavLink, Outlet } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div>
        <button>
          <NavLink to="/">Home</NavLink>
        </button>
        <button>
          <NavLink to="/map">Map</NavLink>
        </button>
        <button>
          <NavLink to="/mern">Mern</NavLink>
        </button>
        <button>
          <NavLink to="/product/1">Product</NavLink>
        </button>
        <Outlet />
      </div>
    );
  }
}
export default Header;
