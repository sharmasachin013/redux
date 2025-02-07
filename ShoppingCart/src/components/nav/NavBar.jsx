import React from "react";
import CategorySelctor from "./CategorySelector";
import SearchBar from "./SearchBar";
import CartButton from "./CartButton";
import { useNavigate, useLocation } from "react-router-dom";

function NavBar(props) {
  const nav = useNavigate();
  const { pathname } = useLocation();

  const handleHomeNavigation = () => {
    nav("/");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom fixed-top">
      <div className="container-fluid px-md-5">
        <span
          id="name"
          className="navbar-brand fw-bold pointer"
          onClick={handleHomeNavigation}
        >
          {props.title}
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          {pathname === "/" && (
            <>
              <CategorySelctor />
              <SearchBar />
            </>
          )}
          <CartButton />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
