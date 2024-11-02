import React from 'react'
import "./Contact.css"
import message_icon from "../../assets/msg.png"
import mail_icon from "../../assets/mail.png"
import phone_icon from "../../assets/phone.png"
import location_icon from "../../assets/location.png"
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "91b68d1a-ee40-4440-b7bc-0aff27e5fcab");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={message_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li><img src={mail_icon} alt="" />assiabechetella1860@gmail.com</li>
            <li> <img src={phone_icon}/> +213 659059320</li>
            <li><img src={location_icon}/> BP N°59 Nibouche Jijel, ALgeria.</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type='text' name='name' placeholder='Enter your name' required/>

            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your mobile number ' required/>

            <label >Write your messages here</label>
            <textarea name="message" id="" cols="30" rows="6" placeholder='Enter your message' required></textarea>
        
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>

      </div>
    </div>
  )
}

export default Contact
