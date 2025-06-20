import React from 'react'
import { Link } from 'react-router-dom'
export default function Banner() {
    return (
        <div className="banner container-xl">
            <div className="row align-items-center" style={{minHeight: "450px"}}>
                <div className="col-lg-6 col-md-8 ps-4 text-sm-start text-center">
                    <h1 className='text-orange'>IT'S MEMEORABLE AND</h1>
                     <h1 className='mb-3'>IT STICKS WITH YOU</h1>
                    <p className='fw-bold'>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELITOAND SED DO EIUSMOD.</p>
                    <div className="d-flex justify-content-sm-start justify-content-center">

                        <Link to="/product" className="btn px-0 fw-bold">
                            <span className="button__inner">
                                <span className="button__content">SHOP NOW</span>
                            </span>
                        </Link>
                        <a href="/" className="btn ps-2 fw-bold">
                            <span className="button__inner">
                                <span className="button__content">REQUEST A QUOTE</span>
                            </span>
                        </a>

                    </div>
                </div>

            </div>
        </div>


    )
}
