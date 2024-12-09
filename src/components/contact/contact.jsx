import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Email sent successfully.!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        setStatus('Error sending the email.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error sending the email.');
    }
  };
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}> 
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName}
          onChange={handleChange}required />
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName}
          onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email}
          onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone}
          onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" rows="4"  value={formData.message}
          onChange={handleChange}/>
        <button type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
    </section>
  );
};

export default Contact;
