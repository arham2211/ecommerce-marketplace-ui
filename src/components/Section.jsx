import React from 'react'
import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'


export default function Section() {
    return (
        <section id="section">

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className="box d-flex align-items-center">
                            <div className="pe-4"><img src={img1} alt="" /></div>
                            <div>
                                <h3>YOUR HEADING HERE!</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box d-flex align-items-center">
                            <div className="pe-4"><img src={img2} alt="" /></div>
                            <div>
                                <h3>YOUR HEADING HERE!</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box mb-0 d-flex align-items-center">
                            <div className="pe-4"><img src={img3} alt="" /></div>
                            <div>
                                <h3>YOUR HEADING HERE!</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
