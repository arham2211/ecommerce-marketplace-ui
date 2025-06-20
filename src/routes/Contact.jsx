import React from 'react'
import PageHeader from '../components/PageHeader';
import ContactUs from '../components/ContactUs';
import '../components/ContactUs.css'

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact Us" readOnly />
      <ContactUs />

    </>
  )
}
