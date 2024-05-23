import React from "react";
import "./Contact.css";
import contact_img from "../../assets/contact-image.jpg";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-image-container">
        <img className="image" src={contact_img} alt="cotact-img" />
        <div className="image-overlay">
          <div className="contact-col">
            <h3>
              CONTACT INFORMATION 
            </h3>
            
            <ul>
            <li>
                <img className="contact-icons" src={phone_icon} alt="" />
                <span>+971 55 490 2442</span>
              </li>
              <li>
                <img className="contact-icons" src={mail_icon} alt="" />
                <span>zohaibajmal@gmail.com</span>
                
              </li>
              
              <li>
                <img className="contact-icons" src={location_icon} alt="" />
                <span>Satwa, Dubai</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
