import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product1 from "../assets/images/product1.png";
import product2 from "../assets/images/product2.png";
import product3 from "../assets/images/product3.png";
import product4 from "../assets/images/product4.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function OurProducts() {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div
      id="slider"
      className="container-lg container-md-fluid custom-container"
    >
      <div className="row">
        <div className="col-lg-4 col-md-6 text-md-start text-center mb-4">
          <h2 className="display-4 mb-sm-0 mb-3">OUR PRODUCTS</h2>
          <p className="text-grey" style={{ fontSize: "14px" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
      </div>
      <div className="row">
        <Slider {...settings}>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-center">
            <div className="product d-flex flex-column">
              <div className="image border-bottom text-center">
                <Link to="/ProductDetails">
                  <img src={product1} className="img-fluid" alt="" />
                </Link>
              </div>
              <div className="py-3 px-3">
                <h3 className="mb-1">YOUR HEADING HERE!</h3>
                <div className="review d-flex align-items-center gap-3 mb-2">
                  <div className="d-flex gap-1 text-orange">
                    <FontAwesomeIcon icon={faStar} />

                    <FontAwesomeIcon icon={faStar} />

                    <FontAwesomeIcon icon={faStar} />

                    <FontAwesomeIcon icon={faStar} />

                    <FontAwesomeIcon icon={faStar} />
                  </div>

                  <p className="mb-0 text-grey">(05 Reviews)</p>
                </div>

                <div className="d-flex dollar mb-3">
                  <p className="mb-0 fw-bold">
                    <span className="text-decoration-line-through text-grey">
                      $22.00
                    </span>{" "}
                    $20.00
                  </p>
                  <pre className="mb-0"> In Stock</pre>
                </div>

                <div>
                  <button type="button" className="btn rounded-0">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-center">
            <div className="product d-flex flex-column">
              <div className="image border-bottom text-center">
                <Link to="/ProductDetails">
                  <img src={product2} className="img-fluid" alt="" />
                </Link>
              </div>
              <div className="py-3 px-3">
                <h3 className="mb-1">YOUR HEADING HERE!</h3>
                <div className="review d-flex align-items-center gap-3 mb-2">
                  <div className="d-flex gap-1 text-orange">
                    <FontAwesomeIcon icon={faStar} />

                    <FontAwesomeIcon icon={faStar} />

                    <FontAwesomeIcon icon={faStar} />

                    <FontAwesomeIcon icon={faStar} />

                    <FontAwesomeIcon icon={faStar} />
                  </div>

                  <p className="mb-0 text-grey">(05 Reviews)</p>
                </div>

                <div className="d-flex dollar mb-3">
                  <p className="mb-0 fw-bold">
                    <span className="text-decoration-line-through text-grey">
                      $22.00
                    </span>{" "}
                    $20.00
                  </p>
                  <pre className="mb-0"> In Stock</pre>
                </div>

                <div>
                  <button type="button" className="btn rounded-0">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-center">
            <div className="product d-flex flex-column">
              <div className="image border-bottom text-center">
                <Link to="/ProductDetails">
                  <img src={product3} className="img-fluid" alt="" />
                </Link>
              </div>
              <div className="py-3 px-3">
                <h3 className="mb-1">YOUR HEADING HERE!</h3>
                <div className="review d-flex align-items-center gap-3 mb-2">
                  <div className="d-flex gap-1 text-orange">
                    <FontAwesomeIcon icon={faStar} />

                    <FontAwesomeIcon icon={faStar} />

                    <FontAwesomeIcon icon={faStar} />

                    <FontAwesomeIcon icon={faStar} />

                    <FontAwesomeIcon icon={faStar} />
                  </div>

                  <p className="mb-0 text-grey">(05 Reviews)</p>
                </div>

                <div className="d-flex dollar mb-3">
                  <p className="mb-0 fw-bold">
                    <span className="text-decoration-line-through text-grey">
                      $22.00
                    </span>{" "}
                    $20.00
                  </p>
                  <pre className="mb-0"> In Stock</pre>
                </div>

                <div>
                  <button type="button" className="btn rounded-0">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-center">
            <div className="product d-flex flex-column">
              <div className="image border-bottom text-center">
                <Link to="/ProductDetails">
                  <img src={product4} className="img-fluid" alt="" />
                </Link>
              </div>
              <div className="py-3 px-3">
                <h3 className="mb-1">YOUR HEADING HERE!</h3>
                <div className="review d-flex align-items-center gap-3 mb-2">
                  <div className="d-flex gap-1 text-orange">
                    <FontAwesomeIcon icon={faStar} />

                    <FontAwesomeIcon icon={faStar} />

                    <FontAwesomeIcon icon={faStar} />

                    <FontAwesomeIcon icon={faStar} />

                    <FontAwesomeIcon icon={faStar} />
                  </div>

                  <p className="mb-0 text-grey">(05 Reviews)</p>
                </div>

                <div className="d-flex dollar mb-3">
                  <p className="mb-0 fw-bold">
                    <span className="text-decoration-line-through text-grey">
                      $22.00
                    </span>{" "}
                    $20.00
                  </p>
                  <pre className="mb-0"> In Stock</pre>
                </div>

                <div>
                  <button type="button" className="btn rounded-0">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-center">
            <div className="product d-flex flex-column">
              <div className="image border-bottom text-center">
                <Link to="/ProductDetails">
                  <img src={product2} className="img-fluid" alt="" />
                </Link>
              </div>
              <div className="py-3 px-3">
                <h3 className="mb-1">YOUR HEADING HERE!</h3>
                <div className="review d-flex align-items-center gap-3 mb-2">
                  <div className="d-flex gap-1 text-orange">
                    <FontAwesomeIcon icon={faStar} />

                    <FontAwesomeIcon icon={faStar} />

                    <FontAwesomeIcon icon={faStar} />

                    <FontAwesomeIcon icon={faStar} />

                    <FontAwesomeIcon icon={faStar} />
                  </div>

                  <p className="mb-0 text-grey">(05 Reviews)</p>
                </div>

                <div className="d-flex dollar mb-3">
                  <p className="mb-0 fw-bold">
                    <span className="text-decoration-line-through text-grey">
                      $22.00
                    </span>{" "}
                    $20.00
                  </p>
                  <pre className="mb-0"> In Stock</pre>
                </div>

                <div>
                  <button type="button" className="btn rounded-0">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
