import React from 'react'
import "../style/Form.css"

export default function Form() {
  return (
    <div className='container11'>
      <form className='contact-form1'>
        <label for="name">Name:</label>
        <br/>
        <input type="input" id="name"placeholder="Enter the name"/>
        <br/>
        <label for="email">Email:</label>
        <br/>
        <input type="email" placeholder="Enter the email"/>
        <br/>
        <label for="textarea">Textarea:</label>
        <br/>
        <textarea></textarea>
        <br/>
        <button className='message'>send message</button>
        </form>
    </div>
  )
}
