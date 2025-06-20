import React from 'react'
import product from '../assets/images/product.png'
import { Link } from 'react-router-dom';

export default function CartPage() {
    return (
        <div id='cart' className="container my-5">

            <div className="row justify-content-between">

                <div className="col-xl-8 col-lg-9">

                    <table className="table">
                        <thead className='bg-orange'>
                            <tr>
                                <th className='ps-4'>ITEM</th>
                                <th className="text-center">QUANTITY</th>
                                <th className="text-center">UNIT PRICE</th>
                                <th className="text-center">SUB PRICE</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <div className="row ">
                                        <div className="col-sm-5">
                                            <div className="img text-center">
                                                <img src={product} className="img-fluid" alt="" />
                                            </div>

                                        </div>

                                        <div className="col-sm-6 small d-flex flex-column justify-content-center">
                                            <p className="mb-1">IPSUM DOLOR</p>
                                            <p className="mb-1">GRAM: 20</p>
                                            <p className="mb-1">30 REVIEWS</p>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <div className="cart mb-4">
                                            <span>
                                                <p className="my-2">2</p>
                                            </span>
                                        </div>
                                        <div className='text-center'>
                                            <a href="" className="text-decoration-none text-dark">Update Cart</a>
                                        </div>

                                    </div>

                                </td>

                                <td>
                                    <div className="d-flex justify-content-center align-items-center">

                                        <p className="my-5">$22</p>

                                    </div>
                                </td>

                                <td>
                                    <div className="d-flex justify-content-between align-items-center">

                                        <div className="my-4">
                                            <p className="my-4">$44</p>
                                        </div>
                                        <div className="cross my-4 bg-orange">
                                            <a href="" className="text-decoration-none text-white">X</a>
                                        </div>

                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div className="row">

                                        <div className="col-sm-5">
                                            <div className="img text-center">
                                                <img src={product} className="img-fluid" alt="" />
                                            </div>

                                        </div>
                                        <div className="col-sm-6 small d-flex flex-column justify-content-center">
                                            <p className="mb-1">IPSUM DOLOR</p>
                                            <p className="mb-1">GRAM: 20</p>
                                            <p className="mb-1">30 REVIEWS</p>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <div className="cart mb-4">
                                            <span>
                                                <p className="my-2">1</p>
                                            </span>
                                        </div>
                                        <div className='text-center'>
                                            <a href="" className="text-decoration-none text-dark">Update Cart</a>
                                        </div>

                                    </div>
                                </td>

                                <td>
                                    <div className="d-flex justify-content-center align-items-center">

                                        <p className="my-5">$32</p>

                                    </div>
                                </td>

                                <td>
                                    <div className="d-flex justify-content-between align-items-center">

                                        <div className="my-4">
                                            <p className="my-4">$32</p>
                                        </div>
                                        <div className="cross my-4 bg-orange">
                                            <a href="" className="text-decoration-none text-white">X</a>
                                        </div>

                                    </div>
                                </td>

                            </tr>
                        </tbody>
                    </table>


                    <div className="d-flex align-items-center justify-content-between">

                        <div className="shop">
                            <a href="/" className='text-orange text-decoration-none fw-bold'>CONTINUE PURCHASING</a>
                        </div>
                        <div className="d-flex flex-column">
                            <div className="d-grid">
                                <Link to="/checkout" className="d-grid text-decoration-none bg-orange">
                                    <button type="button" className="btn text-white fw-bold">PROCEED TO CHECKOUT</button>
                                </Link>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col d-flex justify-content-md-between flex-lg-column flex-sm-row flex-column mt-lg-0 mt-4">

                    <div className="total d-flex align-items-center justify-content-around me-md-0 me-sm-3 mb-4 mb-sm-0">
                        <ul className="nav flex-column me-lg-0 ms-lg-0 me-4 ms-5">
                            <li className="nav-item fw-bold mb-3">Sub Total</li>
                            <li className="nav-item fw-bold mb-3">Discount</li>
                            <li className="nav-item fw-bold mb-3">Shipping</li>
                            <li className="nav-item fw-bold text-orange fw-bold">TOTAL</li>

                        </ul>

                        <ul className="nav flex-column me-lg-0 ms-lg-0 me-5 ms-4">
                            <li className="nav-item fw-bold mb-3">$76</li>
                            <li className="nav-item fw-bold mb-3">$10</li>
                            <li className="nav-item fw-bold mb-3">$15</li>
                            <li className="nav-item fw-bold text-orange fw-bold">$91</li>

                        </ul>

                    </div>


                    <div className="shipping">
                        <ul className="nav flex-column mb-3">
                            <li className="nav-item fw-bold text-orange">Shipping</li>
                            <li className="nav-item fw-bold">Courier ($15)</li>
                        </ul>
                        <ul className="nav flex-column">
                            <li className="nav-item fw-bold text-orange">Estimate For</li>
                            <li className="nav-item fw-bold">United Estate,NY,1230</li>
                        </ul>


                    </div>

                </div>

            </div>
        </div>
    )
}
