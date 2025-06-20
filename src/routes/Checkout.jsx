import React from 'react'
import PageHeader from '../components/PageHeader';
import CheckOut from '../components/CheckoutPart';
import '../components/CheckoutPart.css';

export default function Checkout() {
  return (
    <>
      <PageHeader title="Checkout" readOnly />
      <CheckOut />

    </>
  )
}
