import React from 'react'
import PageHeader from '../components/PageHeader';
import ProductPart from '../components/ProductPart';
import '../components/ProductPart.css'

export default function Product() {
  return (
    <>
      <PageHeader title="Products" readOnly />
      <ProductPart />


    </>
  )
}
