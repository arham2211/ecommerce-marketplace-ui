import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product1 from "../assets/images/product1.png";
import product2 from "../assets/images/product2.png";
import product3 from "../assets/images/product3.png";
import product4 from "../assets/images/product4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function FeatureProducts() {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div id="feature-product" className="container-lg">
      <div className="row">
        <div className="col-xl-3 col-md-4 col-sm-6">
          <div className="premium ps-4 text-white mb-sm-0 mb-4">
            <h5>BEST DEALS</h5>
            <h3>PREMIUM TOOLS</h3>
            <h3>SETS</h3>
            <h3 className="mb-2">UP TO 30% OFF</h3>
            <a href="/" className="text-white">
              SHOP NOW
            </a>
          </div>
        </div>
        <div className="col-xl-9 col-md-8 col-sm-6">
          <div className="row">
            <div className="col-xl-5 col-lg-7 mb-4">
              <h2 className="display-4 mb-0">FEATURE PRODUCTS</h2>
              <p className="text-grey" style={{ fontSize: "14px" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
          <div className="row">
            <Slider {...settings}>
              <div className="col-sm-4">
                <div className="product d-flex flex-column">
                  <div className="image border-bottom text-center">
                    <img src={product1} className="img-fluid" alt="" />
                  </div>
                  <div className="py-3 px-3 text-sm-start text-center">
                    <h3 className="mb-1">YOUR HEADING HERE!</h3>
                    <div className="review d-flex justify-content-md-start justify-content-center align-items-center gap-3 mb-2">
                      <div className="d-flex gap-1 text-orange">
                        <FontAwesomeIcon icon={faStar} />

                        <FontAwesomeIcon icon={faStar} />

                        <FontAwesomeIcon icon={faStar} />

                        <FontAwesomeIcon icon={faStar} />

                        <FontAwesomeIcon icon={faStar} />
                      </div>

                      <p className="mb-0 text-grey">(05 Reviews)</p>
                    </div>

                    <div className="d-flex justify-content-md-start justify-content-center dollar mb-3">
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

              <div className="col-sm-4">
                <div className="product d-flex flex-column">
                  <div className="image border-bottom text-center">
                    <img src={product2} className="img-fluid" alt="" />
                  </div>
                  <div className="py-3 px-3 text-sm-start text-center">
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

              <div className="col-sm-4">
                <div className="product d-flex flex-column">
                  <div className="image border-bottom text-center">
                    <img src={product3} className="img-fluid" alt="" />
                  </div>
                  <div className="py-3 px-3 text-sm-start text-center">
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

              <div className="col-sm-4">
                <div className="product d-flex flex-column">
                  <div className="image border-bottom text-center">
                    <img src={product4} className="img-fluid" alt="" />
                  </div>
                  <div className="py-3 px-3 text-sm-start text-center">
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
      </div>
    </div>
  );
}
