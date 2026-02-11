import React from 'react'
import './Contact.css'
import ContactBanner from '../../Components/Contact/ContactBanner'
import ContactLeaders from '../../Components/Contact/ContactHelp'
import TrustedBy from '../../Components/Home/TrustedBy'
const ContactPage = () => {
  return (
    <div>
      <ContactBanner/>
      <ContactLeaders/>
      <TrustedBy/>
    </div>
  )
}

export default ContactPage
