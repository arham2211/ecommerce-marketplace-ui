import React from 'react'
import PageHeader from '../components/PageHeader';
import CartPage from '../components/CartPage';
import '../components/CartPage.css';

export default function Cart() {
  return (

    <>
      <PageHeader title="Cart" readOnly />
      <CartPage />

    </>

  )
}
