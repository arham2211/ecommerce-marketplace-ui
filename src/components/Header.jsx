import React from "react";
import logo from "../assets/images/logo.png";
import cart from "../assets/images/cart.png";
import phone from "../assets/images/phone.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
export default function Header() {
  return (
    <div id="header" className="container-fluid-xl">
      <div className="container-xl">
        <div className="row">
          {/* LOGO STARTED */}
          <div className="col-sm-3 col-4 bg-dark">
            <div className="text-center py-3">
              <Link to="/">
                <img className="img-fluid" src={logo} alt="logo" />
              </Link>
            </div>
          </div>
          {/* LOGO ENDED */}

          <div className="col-sm-9 col-8 border-right">
            <div className="row border-bottom">
              <div className="col-12 px-0">
                {/* SOCIAL LINKS STARTED */}
                <div className="d-flex justify-content-between">
                  <ul className="nav d-md-flex d-none">
                    <li className="nav-item p-lg-3 p-2">
                      <a
                        className="nav-link bg-orange justify-content-center text-center text-white p-3 rounded-circle"
                        href="/"
                      >
                        <FontAwesomeIcon icon={faFacebookF} className="text-white" size="lg" />
                      </a>
                    </li>
                    <li className="nav-item p-lg-3 p-2">
                      <a
                        className="nav-link bg-orange text-center text-white p-3 rounded-circle"
                        href="/"
                      >
                       <FontAwesomeIcon icon={faInstagram} className="text-white" size="lg" />
                      </a>
                    </li>
                    <li className="nav-item p-lg-3 p-2">
                      <a
                        className="nav-link bg-orange text-center text-white p-3 rounded-circle"
                        href="/"
                      >
                        <FontAwesomeIcon icon={faTwitter} className="text-white" size="lg" />
                      </a>
                    </li>
                    <li className="nav-item p-lg-3 p-2 border-end-0">
                      <a
                        className="nav-link bg-orange text-center text-white p-3 rounded-circle"
                        href="/"
                      >
                        <FontAwesomeIcon icon={faLinkedinIn} className="text-white" size="lg" />
                      </a>
                    </li>
                  </ul>
                  {/* SOCIAL LINKS ENDED */}

                  {/* MY ACCOUNT STARTED */}
                  <ul className="nav nav-pills">
                    <li className="nav-item pt-lg-4 pt-2 border-left">
                      <a className="nav-link" aria-current="page" href="/">
                        MYACCOUNT
                      </a>
                    </li>

                    <li className="nav-item dropdown pt-lg-4 pt-2 border-end-0">
                      <a
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                        href="#"
                        role="button"
                        aria-expanded="false"
                      >
                        ENGLISH
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            French
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            German
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Urdu
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  {/* MY ACCOUNT ENDED */}
                </div>
              </div>
            </div>

            <div className="row mt-md-4 mt-3">
              <div className="col-12">
                <div className="d-flex justify-content-between align-items-center">
                  {/* SEARCH BAR STARTED */}
                  <div className="input d-md-flex d-none border-0 ms-lg-2">
                    <input
                      type="search"
                      className="form-control rounded-0 ps-lg-3 ps-2 py-lg-3 py-2"
                      placeholder="SEARCH PRODUCT..."
                    />
                    <button
                      type="button"
                      className="btn bg-orange text-white rounded-0 py-2 px-4"
                    >
                      SEARCH
                    </button>
                  </div>
                  {/* SEARCH BAR ENDED */}

                  {/* CART STARTED */}
                  <div className="d-flex align-items-center justify-content-center me-lg-5 me-2 ms-3">
                    <div className="cart position-relative me-3 rounded-circle">
                      <Link to="/cart">
                        <img src={cart} className="img-fluid" alt="cart" />
                      </Link>
                      <div className="count bg-orange rounded-circle position-absolute">
                        <p className="m-0 text-white">0</p>
                      </div>
                    </div>
                    <div className="para">
                      <p className="m-0 fw-bold text-grey">YOUR CART:</p>
                      <p className="m-0 text-orange fw-bold">$00.00</p>
                    </div>
                  </div>
                  {/* CART ENDED */}

                  <div className="d-sm-flex d-md-none d-none align-items-center justify-content-end me-2">
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
        </div>
      </div>
    </div>
  );
}
