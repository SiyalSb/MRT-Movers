import React from 'react'
import "./Form.css"

const Form = () => {
  return (
    <div className="contact-form">
        <span>  Send Us Your Enquiry</span>
        <form >
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          />
          <button type="submit" className="btn dark-btn">
            Submit now 
          </button>
        </form>
        
      </div>
  )
}

export default Form