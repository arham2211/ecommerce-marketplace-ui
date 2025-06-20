import React from 'react'
import Section from "../components/Section";
import '../components/Section.css';
import Banner from "../components/Banner";
import '../components/Banner.css';
import OurProducts from "../components/OurProducts";
import '../components/OurProducts.css';
import OurService from "../components/OurService";
import '../components/OurService.css';
import Categories from "../components/Categories";
import '../components/Categories.css';
import FeatureProducts from "../components/FeatureProducts";
import '../components/FeatureProducts.css';
import Brands from "../components/Brands";
import '../components/Brands.css';
import Seller from "../components/Seller";
import '../components/Seller.css';

export default function Home() {
  return (
    <>
    
      
      <Banner />
      <Section />
      <OurProducts />
      <OurService />
      <FeatureProducts />
      <Categories />
      <Brands />
      <Seller />

    </>
  )
}
