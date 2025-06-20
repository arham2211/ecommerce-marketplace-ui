import React, { useState } from 'react';

export default function CheckoutPart() {

    const [openLabel, setOpenLabel] = useState(null);

    const toggleInfo = (label) => {
        setOpenLabel(openLabel === label ? null : label);
    };
    return (


        <div id="checkout" className='container my-5'>
            <div className="row">
                <div className="col-md-7 mb-5 mb-md-0">
                    <div className="form">
                        <form>
                            <h4 className='fw-bold'>Billing Details</h4>
                            <div className="row mb-4">
                                <div className="col">
                                    <label>First name*</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col">
                                    <label>Last name*</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label>Company name(optional)</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="mb-4">
                                <label>Country/Region*</label>
                                <input type="text" className="form-control" placeholder="United States (US)" />
                            </div>

                            <div className="mb-4">
                                <label>Street address*</label>
                                <input type="text" className="form-control mb-4" placeholder="House number and street name" />
                                <input type="text" className="form-control"
                                    placeholder="Apartment,suite,unit,etc.(optional)" />
                            </div>

                            <div className="row mb-4">
                                <div className="col">
                                    <label>Town/City*</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col">
                                    <label>State*</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="row mb-4">
                                <div className="col">
                                    <label>ZIP*</label>
                                    <input type="number" className="form-control" />
                                </div>
                                <div className="col">
                                    <label>Phone*</label>
                                    <input type="number" className="form-control" />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="form-label">Email address*</label>
                                <input type="email" className="form-control" />
                            </div>

                        </form>
                    </div>

                </div>

                <div className="col-md-5">

                    <div className="form">
                        <h4>Your Order</h4>
                        <h6>Product</h6>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <p>Palm Print Jacket x1</p>
                            <p>$40.00</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Palm Print Jacket x1</p>
                            <p>$60.00</p>
                        </div>

                        <div className="d-flex justify-content-between mt-3 mb-5">
                            <h6>Sub Total</h6>
                            <h6>$100.00</h6>
                        </div>

                        <div>
                            <h6 className="mb-3">Shipping</h6>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="check1" name="option1"
                                    value="something" />
                                <label className="form-check-label" htmlFor="check1">Free Shipping</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="check2" name="option2"
                                    value="something" />
                                <label className="form-check-label" htmlFor="check2">Local Pickup</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="check3" name="option3"
                                    value="something" />
                                <label className="form-check-label" htmlFor="check3">Flat rate: $5.00</label>
                            </div>
                        </div>

                        <hr />

                        <div className="d-flex justify-content-between mt-4 mb-4">
                            <h6>Total</h6>
                            <h6>$100.00</h6>
                        </div>

                        <hr />

                        <div className="mt-4">
                            <h6>Payment Methods</h6>
                            <div className="mt-3">
                                <div className="form-check radio mb-2">
                                    <input type="radio" className="payment_methods" name="radios" />
                                    <label className="label1" onClick={() => toggleInfo('label1')} >Direct Bank Transfer</label>
                                    <p className={`${openLabel === 'label1' ? 'show' : ''}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip</p>
                                </div>
                                <div className="form-check radio mb-2">
                                    <input type="radio" className="payment_methods" name="radios" />
                                    <label className="label2" onClick={() => toggleInfo('label2')}>Check Payments</label>
                                    <p className={`${openLabel === 'label2' ? 'show' : ''}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip</p>
                                </div>
                                <div className="form-check radio mb-2">
                                    <input type="radio" className="payment_methods" name="radios" />
                                    <label className="label3" onClick={() => toggleInfo('label3')}>Cash on delivery</label>
                                    <p className={`${openLabel === 'label3' ? 'show' : ''}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip</p>
                                </div>
                                <div className="form-check radio mb-2">
                                    <input type="radio" className="payment_methods" name="radios" />
                                    <label className="label4" onClick={() => toggleInfo('label4')}>Paypal</label>
                                    <p className={`${openLabel === 'label4' ? 'show' : ''}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip</p>
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div className="d-grid">
                            <button type="button" className="btn bg-orange text-white fw-bold rounded-0 py-3">Place Order</button>
                        </div>

                    </div>

                </div>

            </div>
        </div>


    )
}
