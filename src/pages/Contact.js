import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPhoneFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';



const contactInformations = {
  email: 'oussamabaccar4@gmail.com',
  phone: '+216 53 383 635',
  address: {
    street: 'Route de Tunis Km 4',
    city: 'Sfax',
    postalCode: '3031',
    country: 'Tunisia' 
  }
}

function Contact() {
  return (
    <div className='container mt-5'>
      <div>
        <AiOutlineMail size={20} />
        <span style={{marginLeft: 6}}> {contactInformations.email}</span>
      </div>
      <div className='mt-3'>
        <BsFillPhoneFill size={20} />
        <span style={{marginLeft: 6}}> {contactInformations.phone}</span>
      </div>
      <div className='mt-3'>
        <FaMapMarkerAlt size={20} />
        <span style={{marginLeft: 6}}> {contactInformations.address.street}, {contactInformations.address.city}, {contactInformations.address.postalCode}, {contactInformations.address.country} </span>
      </div>
    </div>
  )
}

export default Contact