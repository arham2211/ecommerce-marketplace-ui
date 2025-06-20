import React, { useState } from "react";
import phone from "../assets/images/phone.png";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div id="NavBar" className="container-xl container-fluid">
      <div className="row pt-4 pb-sm-4 border-bottom border-right border-left">
        <div className="col-12">
          <div className="d-flex align-items-sm-center flex-sm-row flex-column justify-content-md-between justify-content-sm-center justify-content-end">
            <div className="input mb-4 d-sm-none d-flex align-items-center border-0 ms-lg-2">
              <input
                type="search"
                className="form-control rounded-0 ps-lg-3 ps-sm-2 px-1 py-1 py-lg-3 py-sm-2"
                placeholder="SEARCH PRODUCT..."
              />
              <button
                type="button"
                className="btn bg-orange text-white rounded-0 py-2 px-4"
              >
                SEARCH
              </button>
              <div className="d-sm-none d-block text-end me-sm-3">
                <button
                  type="button"
                  onClick={toggleMenu}
                  className="navbar-toggler"
                >
                  <span>
                    <i className="fa-regular fa-bars"></i>
                  </span>
                </button>
              </div>
            </div>
            <div className="text-grey d-lg-block d-none">
              <p className="mb-0 fw-bold text-uppercase text-center">
                Free shipping for orders over $1000
              </p>
            </div>

            <ul className={`nav-bar nav ${isMenuOpen ? "show" : ""}`}>
              <li className="nav-item pe-xl-3 pe-2">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link fw-bold active" : "nav-link fw-bold"
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item pe-xl-3 pe-2">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "nav-link fw-bold active" : "nav-link fw-bold"
                  }
                >
                  ABOUT US
                </NavLink>
              </li>
              <li className="nav-item pe-xl-3 pe-2">
                <NavLink
                  className="nav-link fw-bold"
                  activeclassname="active"
                  to="/service"
                >
                  SERVICE
                </NavLink>
              </li>
              <li className="nav-item pe-xl-3 pe-2">
                <NavLink
                  className="nav-link fw-bold"
                  activeclassname="active"
                  to="/product"
                >
                  PRODUCT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold"
                  activeclassname="active"
                  to="/contact"
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
            <div className="d-md-flex d-none align-items-center justify-content-end me-2">
              <div className="phone rounded-circle px-3 py-2 me-3">
                <img src={phone} className="img-fluid" alt="" />
              </div>
              <div>
                <h6 className="m-0 text-grey fw-bold">CALL NOW!</h6>
                <h4 className="m-0 fw-bold">123 456 789</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
