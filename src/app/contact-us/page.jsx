import React from 'react'
import ContactHeader from '@/components/contact/ContactHeader'
import ContactDetails from '@/components/contact/ContactDetails'
import ContactForm from '@/components/contact/ContactForm'

const page = () => {
  return (
    <div>
        <ContactHeader/>
        <ContactDetails/>
        <ContactForm/>
    </div>
  )
}

export default page