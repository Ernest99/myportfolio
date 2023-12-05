import React from 'react'
import './contact.css'
import { MdEmail } from "react-icons/md";
import { MdOutlineWhatsapp } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
const Contact = () => {
  return (
    <div>
      <div className="contact_container">
        <h1>CONTACT ME</h1>
        <div className="contact_items">
          <div className="contact_l item">
              <form action="">
                <div className="inputField">
                  <input type="text" placeholder="Your Full Name"/>
                </div>
                <div className="inputField">
                  <input type="email" placeholder="Your Email Address"/>
                </div>
                <div className="textarea_box">
                  <textarea name="" id="" cols="30" rows="10" placeholder="Message"/>
                </div>
                <div className="contact_btn">
                  <button>Send Message</button>
                </div>
              </form>
          </div>
          <div className="contact_r item">
            <div className="contact_info">
                <div className="contact_info_box">
                  <MdEmail />
                  <h3>Email</h3>
                  <h2>dzegbloramanda@gmail.com</h2>
                  <a href="mailto:dzegbloramanda@gmail.com">Send an Email</a>
                </div>
                <div className="contact_info_box">
                  <MdOutlineWhatsapp />
                  <h3>Whatsapp</h3>
                  <h2>+233541943017</h2>
                  <a href="https://wa.me/+233541943017">Chat Me</a>
                </div>
                <div className="contact_info_box">
                  <AiFillInstagram />
                  <h3>Instagram</h3>
                  <h2>dzemandy_ui/ux</h2>
                 <a href="/">Follow Me</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
