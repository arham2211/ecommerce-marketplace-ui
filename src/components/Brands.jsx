import React from 'react'
import company from '../assets/images/company.png'

export default function Brands() {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col">

                        <div className="text-center category mb-5">
                            <h2>LEADING BRANDS</h2>
                            <p className="fw-bold text-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br /> sed do eiusmod
                                tempor incididunt.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="brands" className="container-fluid">
                <div className="row">
                    <div className="slider">
                        <div className="slide-track gap-5">
                            <div className="slide">
                                <img src={company} alt="" />
                            </div>
                            <div className="slide">
                                <img src={company} alt="" />
                            </div>
                            <div className="slide">
                                <img src={company} alt="" />
                            </div>
                            <div className="slide">
                                <img src={company} alt="" />
                            </div>
                            <div className="slide">
                                <img src={company} alt="" />
                            </div>
                            <div className="slide">
                                <img src={company} alt="" />
                            </div>
                            <div className="slide">
                                <img src={company} alt="" />
                            </div>
                            <div className="slide">
                                <img src={company} alt="" />
                            </div>
                            <div className="slide">
                                <img src={company} alt="" />
                            </div>
                            <div className="slide">
                                <img src={company} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
