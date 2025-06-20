import React from 'react'
import PageHeader from '../components/PageHeader';
import ServicePart from '../components/ServicePart';
import '../components/AboutUs.css'

export default function Service() {
  return (
    <>
      <PageHeader title="Services" readOnly />
      <ServicePart />

    </>
  )
}
