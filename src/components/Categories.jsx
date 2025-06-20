import React from 'react'
import category1 from '../assets/images/category (1).png'
import category2 from '../assets/images/category (2).png'
import category3 from '../assets/images/category (3).png'
import category4 from '../assets/images/category (4).png'
import category5 from '../assets/images/category (5).png'
import category6 from '../assets/images/category (6).png'


export default function Categories() {
    return (
        <div className="container-lg custom-container">
            <div className="row justify-content-center align-items-center">
                <div className="col">

                    <div className="text-center category mb-5">
                        <h2>POPULAR CATEGORIES</h2>
                        <p className="fw-bold text-grey">Lorem ipsum dolor sit amet, consectetur adipisicing <br />elit, sed do eiusmod
                            tempor incididunt.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="d-flex popular">
                        <div className="d-flex flex-column justify-content-center ps-4">
                            <h4>YOUR HEADING HERE!</h4>
                            <p className='text-grey'>Lorem Ipsum.</p>
                            <p className="mb-2 fw-bold">15 Prodcuts</p>
                            <a href="/" className='text-orange'>SHOP NOW</a>
                        </div>
                        <div><img className="img-fluid" src={category1} alt="" /></div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="d-flex popular">
                        <div className="d-flex flex-column justify-content-center ps-4">
                            <h4>YOUR HEADING HERE!</h4>
                            <p className='text-grey'>Lorem Ipsum.</p>
                            <p className="mb-2 fw-bold">15 Prodcuts</p>
                            <a href="/" className='text-orange'>SHOP NOW</a>
                        </div>
                        <div><img className="img-fluid" src={category2} alt="" /></div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="d-flex popular">
                        <div className="d-flex flex-column justify-content-center ps-4">
                            <h4>YOUR HEADING HERE!</h4>
                            <p className='text-grey'>Lorem Ipsum.</p>
                            <p className="mb-2 fw-bold">15 Prodcuts</p>
                            <a href="/" className='text-orange'>SHOP NOW</a>
                        </div>
                        <div><img className="img-fluid" src={category3} alt="" /></div>
                    </div>
                </div>
         

           
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="d-flex popular wow animate__animated animate__slideInLeft">
                        <div className="d-flex flex-column justify-content-center ps-4">
                            <h4>YOUR HEADING HERE!</h4>
                            <p className='text-grey'>Lorem Ipsum.</p>
                            <p className="mb-2 fw-bold">15 Prodcuts</p>
                            <a href="/" className='text-orange'>SHOP NOW</a>
                        </div>
                        <div><img className="img-fluid" src={category4} alt="" /></div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="d-flex popular">
                        <div className="d-flex flex-column justify-content-center ps-4">
                            <h4>YOUR HEADING HERE!</h4>
                            <p className='text-grey'>Lorem Ipsum.</p>
                            <p className="mb-2">15 Prodcuts</p>
                            <a href="/" className='text-orange'>SHOP NOW</a>
                        </div>
                        <div><img className="img-fluid" src={category5} alt="" /></div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="d-flex popular">
                        <div className="d-flex flex-column justify-content-center ps-4">
                            <h4>YOUR HEADING HERE!</h4>
                            <p className='text-grey'>Lorem Ipsum.</p>
                            <p className="mb-2 fw-bold">15 Prodcuts</p>
                            <a href="/" className='text-orange'>SHOP NOW</a>
                        </div>
                        <div><img className="img-fluid" src={category6} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
