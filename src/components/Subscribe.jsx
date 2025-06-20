import React from 'react'
import png from '../assets/images/png.png'

export default function Subscribe() {
    return (
        <div id="subscribe" className=" bg-orange container-fluid">
            <div className="container-lg">
                <div className="row py-5 align-items-center justify-content-center gap-md-0 gap-4">
                    <div className="col-md-2">
                        <div className="text-center">
                            <img src={png} className='img-fluid' alt="" />
                        </div>
                    </div>
                    <div className="col-md-5 text-md-start text-center">

                        <div className="text-white heading">
                            <h3>30% DISCOUNT FOR YOUR FIRST ORDER</h3>
                            <div className='d-md-block d-none'>
                                <h2>SUBSCRIBE TO OUR</h2>
                                <h2>NEWSLETTER</h2>
                            </div>
                            <p className='mb-0 mt-md-0 mt-4'>SUBSCRIBE TO THE NEWSLETTER FOR ALL THE LATEST UPDATES</p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="email">
                            <input type="email" className="form-control" placeholder="YOUR EMAIL ADDRESS" name="email" />
                            <button type="button" className="btn">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
