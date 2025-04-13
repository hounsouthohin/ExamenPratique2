"use client";
import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand bg-body-tertiary bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">The Movie Database</a>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="/AddMovie">➕ Add Movie</a>
          </li>
        </ul>

        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Header;



