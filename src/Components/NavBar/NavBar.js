import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div className="container" id="navbar">
      <div className="row">
        <div className="col-6">
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <Link className="navbar-brand" to={"/"}>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/021/275/825/non_2x/running-shoes-illustration-with-fire-shape-yellow-and-red-isolated-on-transparan-background-free-png.png"
                  alt="tecno"
                  width={60}
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to={"/category/inicio"}
                    >
                      INICIO
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/category/hombre"}>
                      HOMBRE
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/category/mujer"}>
                      MUJER
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/category/niños"}>
                      NIÑOS
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/category/deportes"}>
                      DEPORTES
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-6 d-flex justify-content-end  align-items-center">
          <CartWidget />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
