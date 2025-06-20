import React from 'react'
import PageHeader from '../components/PageHeader';
import AboutUs from '../components/AboutUs';
import '../components/AboutUs.css'

export default function About() {
  return (
    <>
      <PageHeader title="About Us" readOnly />
      <AboutUs />

    </>
  )
}
