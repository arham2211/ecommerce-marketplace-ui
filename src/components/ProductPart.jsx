import React from "react";
import product2 from "../assets/images/product2.png";
import product3 from "../assets/images/product3.png";
import product4 from "../assets/images/product4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export default function ProductPart() {
  return (
    <div id="product-part" className="container">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-5 d-sm-block d-none">
          <div className="refine">
            <h5 className="text-orange">REFINE BY</h5>
          </div>
          <div>
            <ul className="list-group">
              <li className="list-group-item mt-4">AUTOMATION OFFERS</li>
              <li className="list-group-item">ELECTRIC GATE OPENERS</li>
              <li className="list-group-item">CONTROL PANELS</li>
              <li className="list-group-item">RISING BOLLARD</li>
              <li className="list-group-item">GEAR RACKS</li>
              <li className="list-group-item">GATE REMOTE CONTROLS</li>
              <li className="list-group-item">ELECTRIC GATE SPARES</li>
              <li className="list-group-item">ELECTRIC GATE ACCESSORIES</li>
              <li className="list-group-item">INTERCOM OFFERS</li>
            </ul>
          </div>

          <div className="position-sticky top-0">
            <div className="price">
              <h5>PRICE</h5>
            </div>
            <div className="v_list">
              <ul className="list-group">
                <li className="list-group-item mt-4">ON SALE</li>
                <li className="list-group-item">$0 - $25</li>
                <li className="list-group-item">$0 - $25</li>
                <li className="list-group-item">$0 - $25</li>
                <li className="list-group-item">$0 - $25</li>
                <li className="list-group-item">$0 - $25</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-9 col-md-8 col-sm-7">
          <div className="row mt-3">
            <div className="col d-flex align-items-center justify-content-between">
              <div>
                <h5>DRESSY TOPS</h5>
              </div>

              <div className="d-flex gap-3 justify-content-end">
                <h6>SORT:MOST POPULAR</h6>
                <h6>VIEW:60 I 120</h6>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="product d-flex flex-column">
                <div className="image border-bottom text-center">
                  <img src={product2} className="img-fluid" alt="" />
                </div>
                <div className="py-3 px-3 text-sm-start text-center">
                  <h3 className="mb-1">YOUR HEADING HERE!</h3>
                  <div className="review d-flex justify-content-sm-start justify-content-center align-items-center gap-3 mb-2">
                    <div className="d-flex gap-1 text-orange">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />
                    </div>

                    <p className="mb-0 text-grey">(05 Reviews)</p>
                  </div>

                  <div className="d-flex justify-content-sm-start justify-content-center dollar mb-3">
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

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="product d-flex flex-column">
                <div className="image border-bottom text-center">
                  <img src={product3} className="img-fluid" alt="" />
                </div>
                <div className="py-3 px-3 text-sm-start text-center">
                  <h3 className="mb-1">YOUR HEADING HERE!</h3>
                  <div className="review d-flex justify-content-sm-start justify-content-center align-items-center gap-3 mb-2">
                    <div className="d-flex gap-1 text-orange">
                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />
                    </div>

                    <p className="mb-0 text-grey">(05 Reviews)</p>
                  </div>

                  <div className="d-flex justify-content-sm-start justify-content-center dollar mb-3">
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

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="product d-flex flex-column">
                <div className="image border-bottom text-center">
                  <img src={product4} className="img-fluid" alt="" />
                </div>
                <div className="py-3 px-3 text-sm-start text-center">
                  <h3 className="mb-1">YOUR HEADING HERE!</h3>
                  <div className="review d-flex justify-content-sm-start justify-content-center align-items-center gap-3 mb-2">
                    <div className="d-flex gap-1 text-orange">
                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />
                    </div>

                    <p className="mb-0 text-grey">(05 Reviews)</p>
                  </div>

                  <div className="d-flex justify-content-sm-start justify-content-center dollar mb-3">
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

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="product d-flex flex-column">
                <div className="image border-bottom text-center">
                  <img src={product2} className="img-fluid" alt="" />
                </div>
                <div className="py-3 px-3 text-sm-start text-center">
                  <h3 className="mb-1">YOUR HEADING HERE!</h3>
                  <div className="review d-flex justify-content-sm-start justify-content-center align-items-center gap-3 mb-2">
                    <div className="d-flex gap-1 text-orange">
                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />
                    </div>

                    <p className="mb-0 text-grey">(05 Reviews)</p>
                  </div>

                  <div className="d-flex justify-content-sm-start justify-content-center dollar mb-3">
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

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="product d-flex flex-column">
                <div className="image border-bottom text-center">
                  <img src={product3} className="img-fluid" alt="" />
                </div>
                <div className="py-3 px-3 text-sm-start text-center">
                  <h3 className="mb-1">YOUR HEADING HERE!</h3>
                  <div className="review d-flex justify-content-sm-start justify-content-center align-items-center gap-3 mb-2">
                    <div className="d-flex gap-1 text-orange">
                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />
                    </div>

                    <p className="mb-0 text-grey">(05 Reviews)</p>
                  </div>

                  <div className="d-flex justify-content-sm-start justify-content-center dollar mb-3">
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

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="product d-flex flex-column">
                <div className="image border-bottom text-center">
                  <img src={product4} className="img-fluid" alt="" />
                </div>
                <div className="py-3 px-3 text-sm-start text-center">
                  <h3 className="mb-1">YOUR HEADING HERE!</h3>
                  <div className="review d-flex justify-content-sm-start justify-content-center align-items-center gap-3 mb-2">
                    <div className="d-flex gap-1 text-orange">
                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />
                    </div>

                    <p className="mb-0 text-grey">(05 Reviews)</p>
                  </div>

                  <div className="d-flex justify-content-sm-start justify-content-center dollar mb-3">
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

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="product d-flex flex-column">
                <div className="image border-bottom text-center">
                  <img src={product2} className="img-fluid" alt="" />
                </div>
                <div className="py-3 px-3 text-sm-start text-center">
                  <h3 className="mb-1">YOUR HEADING HERE!</h3>
                  <div className="review d-flex justify-content-sm-start justify-content-center align-items-center gap-3 mb-2">
                    <div className="d-flex gap-1 text-orange">
                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />
                    </div>

                    <p className="mb-0 text-grey">(05 Reviews)</p>
                  </div>

                  <div className="d-flex justify-content-sm-start justify-content-center dollar mb-3">
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

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="product d-flex flex-column">
                <div className="image border-bottom text-center">
                  <img src={product3} className="img-fluid" alt="" />
                </div>
                <div className="py-3 px-3 text-sm-start text-center">
                  <h3 className="mb-1">YOUR HEADING HERE!</h3>
                  <div className="review d-flex justify-content-sm-start justify-content-center align-items-center gap-3 mb-2">
                    <div className="d-flex gap-1 text-orange">
                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />
                    </div>

                    <p className="mb-0 text-grey">(05 Reviews)</p>
                  </div>

                  <div className="d-flex justify-content-sm-start justify-content-center dollar mb-3">
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

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="product d-flex flex-column">
                <div className="image border-bottom text-center">
                  <img src={product4} className="img-fluid" alt="" />
                </div>
                <div className="py-3 px-3 text-sm-start text-center">
                  <h3 className="mb-1">YOUR HEADING HERE!</h3>
                  <div className="review d-flex justify-content-sm-start justify-content-center align-items-center gap-3 mb-2">
                    <div className="d-flex gap-1 text-orange">
                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />
                    </div>

                    <p className="mb-0 text-grey">(05 Reviews)</p>
                  </div>

                  <div className="d-flex justify-content-sm-start justify-content-center dollar mb-3">
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

            <div className="col-lg-4 col-md-6 mb-md-0 mb-4">
              <div className="product d-flex flex-column">
                <div className="image border-bottom text-center">
                  <img src={product2} className="img-fluid" alt="" />
                </div>
                <div className="py-3 px-3 text-sm-start text-center">
                  <h3 className="mb-1">YOUR HEADING HERE!</h3>
                  <div className="review d-flex justify-content-sm-start justify-content-center align-items-center gap-3 mb-2">
                    <div className="d-flex gap-1 text-orange">
                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />
                    </div>

                    <p className="mb-0 text-grey">(05 Reviews)</p>
                  </div>

                  <div className="d-flex justify-content-sm-start justify-content-center dollar mb-3">
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

            <div className="col-lg-4 col-md-6 mb-md-0 mb-4">
              <div className="product d-flex flex-column">
                <div className="image border-bottom text-center">
                  <img src={product3} className="img-fluid" alt="" />
                </div>
                <div className="py-3 px-3 text-sm-start text-center">
                  <h3 className="mb-1">YOUR HEADING HERE!</h3>
                  <div className="review d-flex justify-content-sm-start justify-content-center align-items-center gap-3 mb-2">
                    <div className="d-flex gap-1 text-orange">
                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />
                    </div>

                    <p className="mb-0 text-grey">(05 Reviews)</p>
                  </div>

                  <div className="d-flex justify-content-sm-start justify-content-center dollar mb-3">
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

            <div className="col-lg-4 col-md-6">
              <div className="product d-flex flex-column">
                <div className="image border-bottom text-center">
                  <img src={product4} className="img-fluid" alt="" />
                </div>
                <div className="py-3 px-3 text-sm-start text-center">
                  <h3 className="mb-1">YOUR HEADING HERE!</h3>
                  <div className="review d-flex justify-content-sm-start justify-content-center align-items-center gap-3 mb-2">
                    <div className="d-flex gap-1 text-orange">
                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />

                      <FontAwesomeIcon icon={faStar} />
                    </div>

                    <p className="mb-0 text-grey">(05 Reviews)</p>
                  </div>

                  <div className="d-flex justify-content-sm-start justify-content-center dollar mb-3">
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
          </div>
        </div>
      </div>
    </div>
  );
}
