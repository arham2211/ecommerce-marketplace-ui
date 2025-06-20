import { useEffect } from "react";
import React from "react";
import detail1 from "../assets/images/detail1.jpg";
import detail2 from "../assets/images/detail2.jpg";
import $ from "jquery";
import "slick-carousel";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faTruck, faTags,faPlus } from "@fortawesome/free-solid-svg-icons";
export default function ProductDetailPage() {
  useEffect(() => {
    const x = document.getElementById("description");
    const y = document.getElementById("information");
    const z = document.getElementById("review");

    const X = document.querySelector("#Description");
    const Y = document.querySelector("#Information");
    const Z = document.querySelector("#Review");

    const handleXClick = () => {
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
      }
    };

    const handleYClick = () => {
      if (y.style.display === "block") {
        y.style.display = "none";
      } else {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
      }
    };

    const handleZClick = () => {
      if (z.style.display === "block") {
        z.style.display = "none";
      } else {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
      }
    };

    X.addEventListener("click", handleXClick);
    Y.addEventListener("click", handleYClick);
    Z.addEventListener("click", handleZClick);

    return () => {
      X.removeEventListener("click", handleXClick);
      Y.removeEventListener("click", handleYClick);
      Z.removeEventListener("click", handleZClick);
    };
  }, []);

  useEffect(() => {
    const rectangles = document.getElementsByClassName("rectangle");

    const toggleClass = function () {
      const hasOrangeClass = this.classList.contains("orange");

      for (let i = 0; i < rectangles.length; i++) {
        rectangles[i].classList.remove("orange");
      }

      if (!hasOrangeClass) {
        this.classList.add("orange");
      }
    };

    for (let i = 0; i < rectangles.length; i++) {
      rectangles[i].addEventListener("click", toggleClass);
    }

    return () => {
      for (let i = 0; i < rectangles.length; i++) {
        rectangles[i].removeEventListener("click", toggleClass);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const view = document.querySelector(".view");
      const part = document.querySelector(".part");
      if (view && part) {
        $(".view").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: ".part",
        });

        $(".part").slick({
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          focusOnSelect: true,
          arrows: false,
          asNavFor: ".view",
        });

        clearInterval(interval);
      }
    }, 100); // check every 100ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="ProductDetail" className="container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <div className="view mb-5">
            <div className="text-center">
              <img src={detail1} className="img-fluid text-center" alt="" />
            </div>
            <div className="text-center">
              <img src={detail1} className="img-fluid text-center" alt="" />
            </div>
          </div>

          <div className="part">
            <div className="sub_part bg-white">
              <img src={detail2} className="img-fluid" alt="" />
            </div>

            <div className="sub_part bg-white">
              <img src={detail2} className="img-fluid" alt="" />
            </div>

            <div className="sub_part bg-white">
              <img src={detail2} className="img-fluid" alt="" />
            </div>

            <div className="sub_part bg-white">
              <img src={detail2} className="img-fluid" alt="" />
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="px-sm-5 py-5">
            <div className="d-flex justify-content-between mb-4">
              <h2 className="fw-bold text-dark">YOUR HEADING HERE!</h2>
              <h2 className="fw-bold text-dark">$29.00</h2>
            </div>
            <div className="d-flex gap-2 mb-4">
              <span>
                <FontAwesomeIcon icon={faStar} size="xl" className="text-warning" />

              </span>
              <span>
                <FontAwesomeIcon icon={faStar} size="xl" className="text-warning" />

              </span>
              <span>
                <FontAwesomeIcon icon={faStar} size="xl" className="text-warning" />

              </span>
              <FontAwesomeIcon icon={faStar} size="xl" />

              <FontAwesomeIcon icon={faStar} size="xl" />

            </div>
            <div className="mb-4">
              <p className="text-center text-sm-start">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit.
              </p>
            </div>

            <div className="d-flex gap-3 align-items-center justify-content-center justify-content-sm-start mb-3">
              <h5 className="fw-bold">Quantity</h5>
              <div className="d-flex justify-content-center align-items-center gap-2">
                <span className="minus">-</span>
                <span className="num">1</span>
                <span className="plus">+</span>
              </div>
            </div>

            <div className="d-flex gap-2">
            <FontAwesomeIcon icon={faTruck} className="text-dark" />
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
            <div className="d-flex gap-3 mb-3">
            <FontAwesomeIcon icon={faTags} className="text-dark" />
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
            <div className="d-flex justify-content-center justify-content-sm-start">
              <Link to="/product">
                <button type="button" className="btn">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-2 col-4">
          <div id="Description" className="rectangle">
            <h4>Description</h4>
          </div>
        </div>
        <div className="col-lg-2 col-4">
          <div id="Review" className="rectangle">
            <h4>Reviews</h4>
          </div>
        </div>
        <div className="col-lg-3 col-4 px-sm-2 p-0">
          <div id="Information" className="rectangle">
            <h4>Additional Info</h4>
          </div>
        </div>
      </div>
      <hr className="my-5" />

      <div className="row">
        <div className="col-12">
          <div id="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
        </div>

        <div className="col-12">
          <div id="review">
            <div className="listing__faq py-4">
              <div className="faq_inner-listing">
                <h2 className="secondary-color py-2 f-24"> Add Your Review </h2>
                <div className="faq_box-wrapper">
                  <div className="faq_form-box-inner border border-1 border-secondary rounded p-3">
                    <input
                      type="text"
                      name="listing_faq-question"
                      id="review-username"
                      placeholder="Name"
                      className="w-100 py-2 form-control rounded-0"
                      required
                    />
                    <div className="input-group">
                      <textarea
                        aria-label="With textarea"
                        rows="4"
                        cols="50"
                        id="rewiew_message"
                        placeholder="Message"
                        className="form-control mt-3 w-100 rounded-0"
                        required
                      ></textarea>
                    </div>
                    <div className="list_add-faq pt-4">
                      <div className="input-group align-items-center">
                        <input
                          type="file"
                          name="listing_faq-question"
                          id="review-userimage"
                          placeholder="Name"
                          className=" py-2  rounded-0 "
                          required
                        />
                        <div className="list_add-review-cta p-3 rounded bg-secondary pointer">
                          <h3 className="text-dark f-16 fw-semibold m-0">
                          <FontAwesomeIcon icon={faPlus} className="text-dark pe-2 f-20" />
                            Add Another{" "}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div id="information">
              <p>
                Arham ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
