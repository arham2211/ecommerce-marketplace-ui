import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
export default function ContactUs() {
  return (
    <div id="contact" className="container">
      <div className="row my-5">
        <div className="col-lg-5">
          <div className="round bg-orange mb-lg-0 mb-5 text-md-start text-center">
            <div className="mb-5">
              <h1 className="mb-3 fw-bold">Get in Touch</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </p>
            </div>

            <div className="d-flex align-items-center gap-4 mb-5 text-start">
              <div className="circle bg-white text-center p-4 rounded-circle">
                <FontAwesomeIcon icon={faPaperPlane} className="text-orange" size="2x" />
              </div>
              <div>
                <h4 className="mb-0">Email</h4>
                <h5 className="mb-0">your@gmail.com</h5>
              </div>
            </div>

            <div className="d-flex align-items-center gap-4 mb-5 text-start">
              <div className="circle text-center bg-white p-4 rounded-circle">
                <FontAwesomeIcon icon={faPhone} className="text-orange" size="2x" />
              </div>
              <div>
                <h4 className="mb-0">Phone</h4>
                <h5 className="mb-0">+123 456 7890</h5>
              </div>
            </div>

            <div className="d-flex align-items-center gap-4 text-start">
              <div className="circle text-center p-4 bg-white rounded-circle">
                <FontAwesomeIcon icon={faLocationDot} className="text-orange" size="2x" />
              </div>
              <div>
                <h4 className="mb-0">Address</h4>
                <h5 className="mb-0">Lorem Ipsum, 4586 Street</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="form">
            <div className="request text-sm-start text-center">
              <h1 className="text-orange fw-bold">Request A Quote</h1>
            </div>

            <div>
              <form action="/action_page.php">
                <div className="mb-3 mt-4">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Address"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Type"
                  />
                </div>
                <div className="text-sm-start text-center">
                  <button type="submit" className="btn bg-orange">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
