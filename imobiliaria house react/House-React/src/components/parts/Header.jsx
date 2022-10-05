import React from "react";
import logo from "../../images/logo.png";


export default function Header() {
  return (
    <nav id="navbar" className="navbar">
      <div className="container-fluid">
        <a
          className="navbar-brand ps-3 align-text-center m-0 m-auto fw-bold fs-3"
          href="/"
        >
          <img
            src={logo}
            alt="The House"
            width="40"
            height="40"
            class="mx-4 d-inline-block"
          />
          THE HOUSE
        </a>
      </div>
    </nav>
  );
}
