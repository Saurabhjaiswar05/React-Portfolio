import React, { useState } from "react";
import "./Form.css";
import axios from "axios";
import toast from "react-hot-toast";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { name, email, subject, message } = formData;
      const response = await axios.post("https://portfolio-backend-7b49.onrender.com/api/v1/email", {
        name,
        email,
        subject,
        message,
      });
      if(response.data.success){
        toast.success(response.data.message);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }else{
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <label>Message</label>
        <textarea
          rows="6"
          value={formData.message}
          onChange={handleChange}
          placeholder="Type your message here"
          name="message"
        />
        <button type="submit" className="btn" value="Send">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
