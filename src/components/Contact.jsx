import React from 'react'
import '../style/Contact.css';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate=useNavigate();
  return (
    <div className='container'>
      <h1>contact</h1>
      <button onClick={()=>navigate("info")}>Contact Information</button>
      <button onClick={()=>navigate("form")}>Contact Form</button>
    </div>
  )
}
