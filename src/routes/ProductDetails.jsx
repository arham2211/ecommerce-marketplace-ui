import React from 'react'
import PageHeader from '../components/PageHeader';
import Categories from "../components/Categories";
import '../components/Categories.css';
import ProductDetailPage from '../components/ProductDetailPage';
import '../components/ProductDetailPage.css';
export default function ProductDetails() {
    return (
        <>
            <PageHeader title="Product Details" readOnly />
            <ProductDetailPage />
            <Categories />
            <div className='mb-5'></div>
        </>
    )
}
