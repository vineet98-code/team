import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Header(props) {
//   let token = localStorage.getItem("token")


  return (
    <header className="px-40 flex justify-between items-center">
      <button className="text-primary font-bold text-2xl py-3">
        <Link to="#">Add Member</Link>
      </button>
      <div>
      <button className="text-gray-400 ml-6">
        <NavLink exact className="active" to="/">
          Home
        </NavLink>
      </button>
      <button className="text-gray-400 ml-6">
        <NavLink exact className="active" to="/login">
          Sign In
        </NavLink>
      </button>
      <button className="text-gray-400 ml-6">
        <NavLink  exact className="active" to="/signup">
          Sign Up
        </NavLink>
      </button>
    </div>

    </header>
  );
}



