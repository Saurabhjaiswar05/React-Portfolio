import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';
import "./Form.css"

const Form = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gcb5wsa', 'template_g6sc0yo', form.current, {
        publicKey: '0mf1PiYv7L5c0Z1k6',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div className='form' >
      <form action="" ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="from_name"/>
        <label>Email</label>
        <input type="email"  name="from_email"/>
        <label>Subject</label>
        <input type="text" name='subject'/>
        <label>Message</label>
        <textarea rows="6" placeholder='Type your message here' name="message"/>
        <button type="submit" className='btn' value="Send">Submit</button>
      </form>
    </div>
  )
}

export default Form
